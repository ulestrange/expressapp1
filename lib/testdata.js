var testData = {
    name: 'Una',
    age: 21,
    hobbies: ['sailing', 'running', 'swimming', 'reading', 'cinema'],
    results: {
        Maths: 100, Irish: 55, French: 23, Physics: 87,
        Chemistry: {
        }
    }
}

var testCarData = {
    car1: {
        Model: 'Renualt Megane',
        year: '2010',
        Price: 5000
    },
    car2: {
        Model: 'Ford Focus ',
        year: '2017',
        Price: 15000
    },
        car3: {
        Model: 'Jag ',
        Price: 15000
    }
}



weatherData = {
    locations: [
        {
            name: 'Portland',
            forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
            iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
            weather: 'Overcast',
            temp: '54.1 F (12.3 C)',
        },
        {
            name: 'Bend',
            forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
            iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
            weather: 'Partly Cloudy',
            temp: '55.0 F (12.8 C)',
        },
        {
            name: 'Manzanita',
            forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
            iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
            weather: 'Light Rain',
            temp: '55.0 F (12.8 C)',
        },
    ],
};

exports.getWeatherData = function () {
    return weatherData;
}

exports.getTestData = function () {
    return testData;
}

exports.getCarData = function () {
    return testCarData;
}