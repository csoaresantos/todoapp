const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
const port = 3003

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server