// DEPENDENCIES:
const express = require('express')
const app = express()


// ROUTES:
// Root Index:
app.get('/', (req, res) => {
    res.send('Welcome to the Heroku API!')
})


// LISTEN:
app.listen(3000, () => {
    console.log('Greetings from port 3000')
})