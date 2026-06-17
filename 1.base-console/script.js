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

// console.log(null ?? 1); //1
// console.log(undefined ?? 1); //1
// console.log(0 ?? 1); //0
// console.log('' ?? 1); //''
// console.log('String' ?? 1); //'String'

// && - и, первое ложное значение или последнее истинное значение

// console.log(1 && 2 && null && 3); //null
// console.log(1 && 2 && 3); //3
// console.log(1 && 'String'); //'String'

//Сравнение

// console.log({} == {}); //false
// console.log(true == 1); //true
// console.log('' === false); //false
// console.log(5 == '5'); //true

//Преобразование

// console.log(parseInt('   123.456')); //123
// console.log(parseInt('abc123')); //NaN
// console.log(parseInt('123abc')); //123
// console.log(parseFloat('   123.456')); //123.456
// console.log(parseFloat('abc123.456')); //NaN
// console.log(parseFloat('123.456abc')); //123.456

//NaN

//isNaN() сначала приводит значение к числу, а Number.isNaN() нет.

//isNaN - Станет ли значение NaN после преобразования, работает с преобразованием, преобразует в число
//Number.isNaN - Является ли значение именно NaN

console.log(isNaN(NaN)); //true
console.log(isNaN(123)); //false
console.log(isNaN('123')); //false
console.log(isNaN('abc')); //true

console.log(isNaN('123')); // false  -> "123" превращается в 123
console.log(isNaN('hello')); // true   -> "hello" превращается в NaN
console.log(isNaN(undefined)); // true   -> undefined -> NaN
console.log(isNaN(true)); // false  -> true -> 1

console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(123)); //false
console.log(Number.isNaN('123')); //false
console.log(Number.isNaN('abc')); //false
