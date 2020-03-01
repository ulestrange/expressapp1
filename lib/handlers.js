
exports.api = {}

const testData = require('./testdata.js');

exports.home = (req, res) => {

if (req.session.pageViews){
  req.session.pageViews++
  req.session.shoppingcart = {"milk" : 1}
}
else{
  req.session.pageViews = 1;
}

  if (req.signedCookies.tracking) {
    var dateLastVisit = req.signedCookies.tracking;
    var message = "welcome back you last visited on :" + dateLastVisit;
  }
  else{
    message = ""
  }
  var currentDate = new Date();
  console.log (currentDate);
  res.cookie('tracking',currentDate.toUTCString(), {signed : true});
  res.render('home', {'message' : message,
   'numbervisits' : req.session.pageViews,
  cart: req.sesson.shoppingcart})
}


exports.listcars = function(req, res) {
  res.render('listcars', { data: testData.getCarData(), title: 'list cars' });
}

exports.cardetails =  function(req, res) {
  carData = testData.getCarData();
  requestedCarData = carData[req.params.carid];
  console.log(requestedCarData);

  if (! requestedCarData)
  {
    res.render('404')
  }
  else {

  res.render('cardetails', { data: requestedCarData });
  }
}

// **** these handlers are for browser-submitted forms
exports.newsletterSignup = (req, res) => {
  // we will learn about CSRF later...for now, we just
  // provide a dummy value
  res.render('newsletter-signup', { csrf: 'CSRF token goes here' })
}
exports.newsletterSignupProcess = (req, res) => {
  console.log('CSRF token (from hidden form field): ' + req.body._csrf)
  console.log('Name (from visible form field): ' + req.body.name)
  console.log('Email (from visible form field): ' + req.body.email)
  res.redirect(303, '/newsletter-signup/thank-you')
}
exports.newsletterSignupThankYou = (req, res) => res.render('newsletter-signup-thank-you')
// **** end browser-submitted form handlers




// **** these handlers are for fetch/JSON form handlers
exports.newsletter = (req, res) => {
  // we will learn about CSRF later...for now, we just
  // provide a dummy value
  res.render('newsletter', { csrf: 'CSRF token goes here' })
}
exports.api.newsletterSignup = (req, res) => {
  console.log('CSRF token (from hidden form field): ' + req.body._csrf)
  console.log('Name (from visible form field): ' + req.body.name)
  console.log('Email (from visible form field): ' + req.body.email)
  res.send({ result: 'success' })
}
// **** end fetch/JSON form handlers


// app.get('/carDetails/:carid', function (req, res){
//     carData = testData.getCarData();
//     requestedCarData = carData[req.params.carid];
//     console.log(requestedCarData);
//     res.render('cardetails', {data : requestedCarData});
// })

// app.post('/nameForm', function (req, res) {
//     let user = req.body.firstname;
//     res.render('nameForm', {firstnameentered: user});
// });


exports.about =  (req, res) => {
    res.render('about', {layout : 'special'});
};

// the contact-us page


exports.contact =  function (req, res) {
    res.render('contact', {message: "silly excuse"});
};

exports.failed =  (req, res) => {
  res.render('failed');
};

// handlers for the form which submits using fetch.
exports.getAddCar2 = (req, res) => res.render('addcar2');

exports.api.addCar = (req, res) => {
  console.log('Name of car : ' + req.body.carname);
  console.log('model of car : ' + req.body.model);
  res.send({ result: 'success' });
};

// handlders for the form which has normal form submission.

exports.getAddCar = (req, res) => res.render('addcar');



exports.postAddCar = (req, res) => {
  console.log('Add car form submitted :' + req.body.carname);
  console.log('Add car form submitted :' + req.body.model);
  
  if (req.body.carname.includes('una')){
    res.redirect(303, '/failed');
  }
  else{
  res.redirect(303, '/caradded');
  }
};

exports.carAdded = (req, res) => res.render('carAdded');

exports.notFound = (req, res) => res.render('404')


exports.serverError = (err, req, res, next) => res.render('500')
