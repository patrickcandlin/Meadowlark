const handlers = require('./lib/handlers')
const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()
// configuring Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.port || 3000

app.use(express.static(__dirname + '/public'))

// index
app.get('/', handlers.home)

// about route
app.get('/about', handlers.about)

// custom 404 page
app.use(handlers.notFound)
// custom 500 page
app.use(handlers.serverError)

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + 
    `press Ctrl-c to terminate.`
))