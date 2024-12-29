// for env variables
require('dotenv').config()

// Import the express module to use in this app
const express = require('express')

// Create an instance of an Express application
const app = express()

// Set the port where the server will listen for requests
// const port = 3000

// Define a route for the root URL ('/') 
app.get('/', (req, res) => {
  // Send a response with the text 'Hello World!' when the root URL is visited
  res.send('Hello World!')
})

// Define a route for the '/login' URL
app.get('/login', (req, res) => {
    // we can Send an HTML response also
    res.send('<h1>Login Page</h1>')
})

// Define a route for the '/yt' URL
app.get('/yt', (req, res) => {
    res.send('<h2>chai aur code</h2>')
})

// Start the server, making it listen on the specified port (3000)
app.listen(process.env.PORT, () => {
  // Log a message to the console when the server is running
  console.log(`Example app listening on port ${process.env.PORT}`)
})
