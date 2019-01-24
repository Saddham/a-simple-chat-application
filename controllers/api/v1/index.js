const express = require('express')
const v1 = new express.Router()
const chat = require('./chat')

v1.use('/chat', chat)

module.exports = v1
