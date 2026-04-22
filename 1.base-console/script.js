// Поднятие
// console.log(x); //undefined
// var x = 5;

// Типы данных

// const calc = () => {
//   return 2 + 2;
// };
// console.log(typeof null); //object
// console.log(typeof calc); //function
// console.log(typeof NaN); //number
// console.log(typeof Infinity); //number
// console.log(typeof 0); //number
// console.log(typeof undefined); //undefined
// console.log(typeof '0'); //string
// console.log(typeof false); //boolean
// console.log(typeof [1, 2, 3]); //object
// console.log(typeof {}); //object
// console.log(typeof Symbol); //function
// console.log(typeof BigInt); //function

//Преобразование типов
// console.log(Number('   123   ')); //123
// console.log(Number('   123z   ')); //NaN
// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(Number(null)); //0
// console.log(Number(undefined)); //NaN

// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean(0)); //false
// console.log(Boolean('')); //false
// console.log(Boolean(' ')); //true

//Логические операторы

// || - или, первое истинное значение или последнее ложное значение

// console.log(null || 1); //1
// console.log(0 || 1); //1
// console.log(null || 0 || 1); //1
// console.log(null || 0 || 1 || 'String'); //1
// console.log(undefined || null || 0 || false); //false

// ?? - оператор нулевого слияния, первое истинное значение или последнее ложное значение, ложные только null и undefined

console.log(null ?? 1); //1
console.log(undefined ?? 1); //1
console.log(0 ?? 1); //0
console.log('' ?? 1); //''
console.log('String' ?? 1); //0
