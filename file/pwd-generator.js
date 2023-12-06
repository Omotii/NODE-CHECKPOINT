var generator = require('generate-password');

var randomPassword = generator.generate({
    length: 9,
    numbers: true
})

console.log(randomPassword);