const express = require('express')
const app = express()
const port = 3000

// import our test data

var testData = require('./lib/testdata.js');



// set up handlebars view engine
var handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// middleware for serving static files from the public folder.

app.use(express.static('public'));

// middleware for parsing the body of Posts
// need this before you can use req.body

app.use(express.urlencoded({ extended: true })) 

// middleware for saving the weather data into a variable which
// can be accesed by any template.

app.use(function(req, res, next){
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weatherData = testData.getWeatherData();
    next();
    });


// the default route when there is no path.

app.get('/', function (req, res) {
    res.render('home');
});

// the about page

app.get('/about', function (req, res) {
    res.render('about', {layout : 'special'});
});

// the test template page

app.get('/testTemplate', function (req, res) {
    res.render('testTemplate', {data: testData.getTestData()});
});


app.get('/addcar', function (req, res) {
    res.render('addcar');
});
app.post('/addcar', function (req, res) {
    console.log('Add car form submitted :' + req.body.carname)
    res.redirect(303, '/caradded');
});
app.get('/caradded', function (req, res) {
    res.render('caradded');
});

// listing all the cars

app.get('/listcars', function (req, res) {
    res.render('listcars', {data: testData.getCarData()});
});
//the name page

app.get('/name', function (req, res) {
    let user = req.query.user;
    res.render('name', {name: user});
});

app.get('/nameForm', function (req, res) {
    let user = req.body.firstName;
    res.render('nameForm');
});

app.get('/carDetails/:carid', function (req, res){
    carData = testData.getCarData();
    requestedCarData = carData[req.params.carid];
    console.log(requestedCarData);
    res.render('cardetails', {data : requestedCarData});
})

app.post('/nameForm', function (req, res) {
    let user = req.body.firstname;
    res.render('nameForm', {firstnameentered: user});
});

// the contact-us page


app.get('/contact', function (req, res) {
    var d = new Date();
    var n = d.getHours();
    var excuse = "";
    if (n < 10)
    {
        excuse = "too early";
    }
    else if (n < 17) {
        excuse = "too late";
    }
    else  {
        excuse = "way too late !!!!";
    }
    res.render('contact', {message: excuse});
});


// // 404 catch-all handler (middleware)
app.use(function (req, res, next) {
    res.status(404);
    res.render('404', {layout: null});
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