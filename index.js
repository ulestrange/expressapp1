const express = require('express')
const app = express()
const port = 3000

// set up handlebars view engine
var handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// middleware for serving static files from the public folder.

app.use(express.static('public'));

// the default route when there is no path.

app.get('/', function (req, res) {
    res.render('home');
});

// the about page

app.get('/about', function (req, res) {
    res.render('about');
});

// the contact-us page

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});


// // 404 catch-all handler (middleware)
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});
// // 500 error handler (middleware)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});






app.get('/contact', function (req, res) {
    res.type('text/plain');
    res.send('Don\'t bother we never reply');
});





app.listen(port, () => console.log(`Example app listening on port ${port}!`))