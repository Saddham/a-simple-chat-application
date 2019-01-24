var io = require('socket.io-client')
var jquery = require('jquery')

jquery(function () {
  var socket = io()
  jquery('form').submit(function (e) {
    e.preventDefault() // prevents page reloading
    socket.emit('chat message', jquery('#message').val())
    jquery('#message').val('')
    return false
  })

  socket.on('chat message', function (msg) {
    jquery('#messages').append(jquery('<p>').text(msg))
  })
})
