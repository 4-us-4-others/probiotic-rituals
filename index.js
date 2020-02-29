const express = require('express')
const compression = require('compression')
const mustacheExpress = require('mustache-express')
const Arena = require('are.na')
const yaml = require('js-yaml')
const fs = require('fs')
require('dotenv-flow').config()

const environment = process.env.environment
const cdn = process.env.cdn

// here we declare our site config as cache - this is loaded if there any errors are thrown when trying to get our channel from are.na
let cache
if (environment !== 'now') {
  cache = yaml.safeLoad(fs.readFileSync(`${__dirname}/api/config.yaml`, 'utf8'))
  // now requires `__dirname + ` vs the simpler `./*` for paths here. ref: https://github.com/zeit/ncc/issues/216 (says fixed but is not)
} else {
  cache = yaml.safeLoad(fs.readFileSync('./api/config.yaml', 'utf8'))
}

const app = express()

app.use(compression())

if (environment !== 'now') {
  app.use('/js', express.static('js'))
  app.use('/stylesheets', express.static('stylesheets'))
  app.use('/fonts', express.static('fonts'))
  app.use('/assets', express.static('assets'))
  app.use('/api', express.static('api'))
}

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', `${__dirname}/views`)

app.get('/', async function(req, res) {
  const arena = new Arena({ accessToken: process.env.arenaPAT })
  arena
    .channel(process.env.arenaChannel)
    .get({
      page: 1, // get the first page of results
      per: 64, // get 64 items per call (max: 100) - play around w this for performance
      direction: 'desc' // ask API v nicely to sort blocks by most recent
    })
    .then(channel => {
      // fetch our whole are.na channel as `channel`

      const config = yaml.safeLoad(channel.metadata.description) // get our site description from our are.na channel description - since it is loaded in as yaml, we can access it's values with `config.key`, ex: for title, we can use `config.details.title`
      const contents = channel.contents // clean up the results a little bit, and make the channel's contents available as a constant, `contents`

      // res.send(channel) // uncomment this to see the js object that gets passed to the render
      res.render('index.html', {
        static_url: cdn,
        config,
        arena: contents // pass our are.na channel contents into the render for use w mustache.js by using `{{arena}}` - see views/arena.html
      })
    })
    .catch(err => {
      // handle errors

      cache.details.title = 'Error 😭' // change the value of cache.details.title (loaded from ./api/config.yaml) to reflect an error

      console.log(err)
      res.render('index.html', {
        title: 'Error 😭',
        static_url: cdn,
        config: cache
      })
    })
})

app.use(function(req, res) {
  res.status(404)

  if (req.accepts('html')) {
    res.render('404', {
      url: req.url,
      static_url: '...',
      title: 'Page not found'
    })
  } else {
    res.send('404')
  }
})

if (environment !== 'now') {
  const port = process.env.PORT || 3000
  app.listen(port, function() {
    console.log(`Up on port ${port} 🥚`)
  })
} else {
  app.listen()
}
// what's happening here ?
// `now` does not like it when ports are specified for it to use, or when options are set inside `app.listen(...)`. However, nodemon _does_ like having options set for ports, so this sets options based on what you are current running/building the server with
// if you are running hot reloading w `$ nodemon`, `environment` will be "development", and the server will run w a specified PORT (in this case, 3000)
// if you are compiling a `now` build w `$ now dev`, or `now`, `environment` will be "now", and now will listen with just `app.listen()`
// you can configure the production environment in `.env` :)
