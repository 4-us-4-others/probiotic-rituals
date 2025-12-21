import { Hono } from 'hono'
import { cors } from 'hono/cors'
import Mustache from 'mustache'
import yaml from 'js-yaml'

const app = new Hono()

app.use('*', cors())

const getEnv = (c) => ({
  environment: c.env.environment || 'production',
  cdn: c.env.cdn,
  BROWSER_REFRESH_URL: c.env.BROWSER_REFRESH_URL,
  arenaPAT: c.env.arenaPAT,
  arenaChannel: c.env.arenaChannel,
})

const templates = {}

let configCache = null

async function loadConfig(assetsBinding) {
  if (configCache) {
    return configCache
  }

  try {
    const url = 'http://localhost/api/config.yaml'
    const response = await assetsBinding.fetch(url)

    if (!response.ok) {
      throw new Error(`Config file not found (${response.status})`)
    }

    const yamlText = await response.text()
    configCache = yaml.load(yamlText)
    console.log('Loaded config from api/config.yaml')
    return configCache
  } catch (error) {
    console.error('Error loading config:', error)
    return {
      details: {
        title: 'Error loading config',
      },
    }
  }
}

async function loadTemplate(templateName, assetsBinding) {
  const cacheKey = templateName
  if (templates[cacheKey]) {
    return templates[cacheKey]
  }

  try {
    const fileName = templateName.endsWith('.html') ? templateName : `${templateName}.html`
    const url = `http://localhost/views/${fileName}`
    const response = await assetsBinding.fetch(url)

    if (!response.ok) {
      throw new Error(`Template ${templateName} not found (${response.status})`)
    }

    const template = await response.text()
    templates[cacheKey] = template
    return template
  } catch (error) {
    console.error(`Error loading template ${templateName}:`, error)
    throw error
  }
}

async function loadPartials(template, assetsBinding, loadedPartials = {}) {
  const partialRegex = /\{\{>\s*([^\}]+)\s*\}\}/g
  let match

  while ((match = partialRegex.exec(template)) !== null) {
    const partialPath = match[1].trim()

    if (loadedPartials[partialPath]) {
      continue
    }

    try {
      const partialContent = await loadTemplate(partialPath, assetsBinding)
      loadedPartials[partialPath] = partialContent
      await loadPartials(partialContent, assetsBinding, loadedPartials)
    } catch (error) {
      console.error(`Error loading partial ${partialPath}:`, error)
      loadedPartials[partialPath] = `<!-- Partial ${partialPath} not found -->`
    }
  }

  return loadedPartials
}

async function renderMustache(templateName, data, assetsBinding) {
  const template = await loadTemplate(templateName, assetsBinding)
  const partials = await loadPartials(template, assetsBinding)
  return Mustache.render(template, data, partials)
}

async function fetchArenaChannel(accessToken, channelSlug) {
  const url = `https://api.are.na/v2/channels/${channelSlug}?page=1&per=64&direction=desc`

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error(`Are.na API error: ${response.status}`)
  }

  return response.json()
}

app.get('/', async (c) => {
  const env = getEnv(c)

  try {
    const channel = await fetchArenaChannel(env.arenaPAT, env.arenaChannel)

    let config
    try {
      config = yaml.load(channel.metadata.description)
    } catch (yamlError) {
      console.error('Error parsing YAML from channel description:', yamlError)
      config = await loadConfig(c.env.ASSETS)
    }

    const contents = channel.contents

    const html = await renderMustache(
      'index',
      {
        static_url: env.cdn,
        config,
        arena: contents,
      },
      c.env.ASSETS
    )

    return c.html(html)
  } catch (error) {
    console.error('Error fetching Are.na channel:', error)

    const cache = await loadConfig(c.env.ASSETS)

    const errorConfig = {
      ...cache,
      details: {
        ...cache.details,
        title: 'Error 😭',
      },
    }

    try {
      const html = await renderMustache(
        'index',
        {
          title: 'Error 😭',
          static_url: env.cdn,
          config: errorConfig,
        },
        c.env.ASSETS
      )

      return c.html(html)
    } catch (renderError) {
      console.error('Error rendering error page:', renderError)
      return c.text('Error loading page', 500)
    }
  }
})

app.get('/js/*', async (c) => {
  const path = c.req.path
  return c.env.ASSETS.fetch(new Request(`http://localhost/public${path}`))
})

app.get('/stylesheets/*', async (c) => {
  const path = c.req.path
  return c.env.ASSETS.fetch(new Request(`http://localhost/public${path}`))
})

app.get('/fonts/*', async (c) => {
  const path = c.req.path
  return c.env.ASSETS.fetch(new Request(`http://localhost/public${path}`))
})

app.get('/assets/*', async (c) => {
  const path = c.req.path
  return c.env.ASSETS.fetch(new Request(`http://localhost/public${path}`))
})

app.get('/api/*', async (c) => {
  const path = c.req.path
  return c.env.ASSETS.fetch(new Request(`http://localhost${path}`))
})

app.get('/favicon.ico', (c) => c.body(null, 204))

app.notFound(async (c) => {
  try {
    const html = await renderMustache(
      '404',
      {
        url: c.req.url,
        static_url: '...',
        title: 'Page not found',
      },
      c.env.ASSETS
    )
    return c.html(html, 404)
  } catch (error) {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Page not found</title>
</head>
<body>
  <h1>404 - Page not found</h1>
  <p>The page ${c.req.url} could not be found.</p>
</body>
</html>
    `
    return c.html(html, 404)
  }
})

export default app
