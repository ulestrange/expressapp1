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

var testCarData ={
    car1: {
        Model: 'Renualt Megane',
        year: '2010',
        Price: 5000
    },
    car2: {
        Model: 'Ford Focus ',
        year: '2017',
        Price: 15000
    }
}

exports.getTestData = function () {
    return testData;
}

exports.getCarData = function () {
    return testCarData;
}