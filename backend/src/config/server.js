const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

const port = 3003

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})