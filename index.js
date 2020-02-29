const express = require('express')
const compression = require('compression')
const mustacheExpress = require('mustache-express')
require('dotenv-flow').config()

const environment = process.env.environment
const cdn = process.env.cdn

const app = express()

app.use(compression())

if (environment !== 'now') {
  app.use('/js', express.static('js'))
  app.use('/stylesheets', express.static('stylesheets'))
  app.use('/fonts', express.static('fonts'))
  app.use('/assets', express.static('assets'))
}

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', `${__dirname}/views`)

app.get('/', async function(req, res) {
  res.render('index.html', {
    title: 'gl bro',
    static_url: cdn
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
