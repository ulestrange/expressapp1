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

exports.getTestData = function () {
    return testData;
}