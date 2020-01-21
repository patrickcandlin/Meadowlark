const express = require('express')

const app = express()

const port = process.env.port || 3000

// index
app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadowlark Travel')
})

// about route
app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About Meadowlark Travel')
  })

// custom 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(400)
    res.send('404 - Not Found')
})
// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + 
    `press Ctrl-c to terminate.`
))