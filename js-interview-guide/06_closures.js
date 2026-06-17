//1

// function sayHelloTo(name) {
//   const message = 'Hello ' + name;

//   return function () {
//     console.log(message);
//   };
// }

// const helloToElena = sayHelloTo('Elena');
// const helloToIgor = sayHelloTo('Igor');
// console.log(helloToElena); // function Function (anonymous)
// console.log(helloToElena()); // undefined
// helloToElena(); // Hello Elena
// helloToIgor(); // Hello Igor

//2

// function createFrameworkManager() {
//   const fw = ['Angular', 'React'];

//   return {
//     print: function () {
//       console.log(fw.join(' '));
//     },
//     add: function (framework) {
//       fw.push(framework);
//     },
//   };
// }

// const manager = createFrameworkManager();
// console.log(manager); //{ print: [Function: print], add: [Function: add] }
// manager.print(); //Angular React
// manager.add('VueJS');
// manager.print(); //Angular React VueJS

// 3. setTimeout

const fib = [1, 2, 3, 5, 8, 13];

// с let

for (let i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500);
}

// с var и замыканием и IIFE

// for (var i = 0; i < fib.length; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(`fib[${j}] = ${fib[j]}`);
//     }, 1500);
//   })(i);
// }
