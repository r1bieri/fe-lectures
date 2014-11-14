function Person() {}
//Person.prototype = {};
//Person.prototype.constructor = Person;

var individual = new Person();

console.log(individual.__proto__ === Person.prototype); // => true
console.log(individual instanceof Person); // => true

console.log(individual.constructor === Person); // => true
console.log(individual.__proto__.constructor === Person); // => true

console.log(individual.hasOwnProperty('fingers')); // => false