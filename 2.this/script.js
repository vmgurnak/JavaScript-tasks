// 1

//Метод - обычная функция, которая принадлежит какому-то объекту
//Неважно где создается функция, важно где вызывается

// let obj = {
//   name: 'Alece',
//   sayHi() {
//     console.log(this.name);
//   },
// };

// let fn = obj.sayHi(); // Alece

// let fn1 = obj.sayHi;
// fn1(); // undefined

//Метод - стрелочная функция, которая принадлежит какому-то объекту
//Неважно где и как вызывается стрелочная функция, важно где создается

// 2

// const personArr = {
//   name: 'Bob',
//   greet: () => {
//     console.log(this);
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// personArr.greet(); //Hello, my name is undefined

// 3

// const personSet = {
//   name: 'Lily',
//   greet: function () {
//     console.log(this);
//     setTimeout(() => {
//       console.log(this);
//       console.log(`Hello, my name is ${this.name}`);
//     }, 1000);
//   },
// };

// personSet.greet();
// const ff = personSet.greet;
// ff();
