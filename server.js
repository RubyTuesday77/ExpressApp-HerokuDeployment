// DEPENDENCIES:
const express = require('express')
const app = express()
require('dotenv').config()


// ROUTES:
// Root Index:
app.get('/', (req, res) => {
    res.send('Welcome to the Heroku API!')
})


// LISTEN:
app.listen(process.env.PORT)