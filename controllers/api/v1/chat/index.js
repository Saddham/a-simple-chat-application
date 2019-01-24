const express = require('express')
const chat = new express.Router()

chat.get('/', function (req, res) {
  res.render('pages/chat/index', { chat: null, error: null })
})

chat.post('/', function (req, res) {
  let chatText = ''
  res.render('pages/chat/index', {
    chat: chatText,
    error: null
  })
})

module.exports = chat
