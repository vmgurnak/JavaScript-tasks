// __proto__ // ES 6

// Object.getPrototypeOf() // ES 5

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Cat.prototype.voice = function () {
//   console.log(`Cat ${this.name} says myay`);
// };

// const cat = new Cat('Kot', 'white');

// console.log(Cat.prototype); // { voice: [Function (anonymous)] }
// console.log(cat); // Cat { name: 'Kot', color: 'white' }
// console.log(cat.__proto__ === Cat.prototype); // true
// console.log(cat.constructor); // [Function: Cat]
// cat.voice(); // Cat Kot says myay

// ============

// function Person() {}
// Person.prototype.legs = 2;
// Person.prototype.skin = 'white';

// const person = new Person();
// person.name = 'Vladilen';

// console.log('skin' in person); // true
// console.log(person.legs); // 2
// console.log(person.name); // Vladilen

// console.log(person.hasOwnProperty('name')); // true
// console.log(person.hasOwnProperty('skin')); // false

// console.log(person.__proto__); // Person { legs: 2, skin: 'white' }
// console.log(Person.prototype); // Person { legs: 2, skin: 'white' }

// Object.create()

let proto = { year: 2019 };
const myYear = Object.create(proto);

console.log(myYear); // {}
console.log(myYear.year); // 2019

proto.year = 2200;
console.log(myYear.year); // 2200

console.log(myYear.hasOwnProperty('year')); // false
console.log(myYear.__proto__ === proto); // true
