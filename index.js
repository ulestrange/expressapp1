const express = require('express')
const app = express()
const port = 3000

// import our test data

const testData = require('./lib/testdata.js');
const handlers = require('./lib/handlers');

const bodyParser = require('body-parser')



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
//app.use(express.bodyParser.json())

// middleware for saving the weather data into a variable which
// can be accesed by any template.

app.use(function(req, res, next){
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weatherData = testData.getWeatherData();
    next();
    });


// the default route when there is no path.

app.get('/', handlers.home)


// the about page

app.get('/about', handlers.about);






app.get('/addcar', handlers.getAddCar);


app.post('/addcar', handlers.postAddCar);


app.get('/caradded', handlers.carAdded);



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


app.get('/contact', handlers.contact );


// handlers for fetch/JSON form submission
app.get('/newsletter', handlers.newsletter)
app.post('/api/newsletter-signup', handlers.api.newsletterSignup)

app.post('')


app.use(handlers.notFound)
app.use(handlers.serverError)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))