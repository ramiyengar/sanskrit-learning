const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
// const mongoose = require('mongoose')
const lessonController = require('./controllers/vrittaratnakara')
const activityController = require('./controllers/activity')
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

/*
const db_url = 'mongodb://samskriti:srvvp2017@ds149754.mlab.com:49754/sanskrit'
mongoose.connect(db_url)
mongoose.connection.on('error', () => {
  console.log(
    '%s MongoDB connection error. Please make sure MongoDB is running.'
  )
  process.exit()
})
mongoose.connection.once('open', function() {
  console.log('connected to sanskrit db!')
})
*/
app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // middleware to use for all requests
  router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.')
    next() // make sure we go to the next routes and don't stop here
  })

  // API endpoints

  router.get('/', (req, res) => {
    res.send('Greetings from the Test controller!')
  })

  router.get('/lessons', lessonController.getLessons)
  router.get('/lessons/:id', lessonController.getLesson)
  router.post('/lessons', lessonController.addLesson)

  router.get('/activities', activityController.getActivities)
  router.get('/activities/:num', activityController.getActivity)
  router.post('/activities', activityController.addActivity)
  // Give nuxt middleware to express
  app.use('/api', router)
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
