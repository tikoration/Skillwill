const validator = require('validator');

const test1 = validator.isEmail("test@test.com")
const test2 = validator.isEmail("abcDE123")

console.log(test1) //true
console.log(test2) //false