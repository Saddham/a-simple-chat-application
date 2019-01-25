const bodyParser = require('body-parser')
const express = require('express')
const compression = require('compression')
const app = express()
const apiRouter = require('./controllers/api')

const server = app.listen(process.env.PORT || 3000, function () {
  console.log('Live at port ' + (process.env.PORT || 3000) + '!')
})

const io = require('socket.io').listen(server)

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg)
    io.emit('chat message', msg)
  })
})

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
  extended: true
}))

// compress all responses
app.use(compression())

app.use('/api', apiRouter)
