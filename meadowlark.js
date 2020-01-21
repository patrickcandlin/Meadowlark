const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()
// configuring Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.port || 3000

// index
app.get('/', (req, res) => res.render('home'))

// about route
app.get('/about', (req, res) => res.render('about'))

// custom 404 page
app.use((req, res) => {
    res.status(400)
    res.render('404')
})
// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + 
    `press Ctrl-c to terminate.`
))