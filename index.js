require('dotenv').config()
const express = require('express')

const routes = require('./routes')
const app = express()
const SERVER_PORT = process.env.SERVER_PORT

app.use(express.static('public'))

routes(app)

app.listen(SERVER_PORT || 3000, () => {
    console.log('\x1b[33m%s\x1b[0m', `Server is running on port: ${SERVER_PORT}`)
})