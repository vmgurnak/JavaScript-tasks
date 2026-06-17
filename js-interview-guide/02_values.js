//примитивные типы данных

// let a = 42;
// let b = a;
// b++;
// console.log('a', a); // 42
// console.log('b', b); // 43

//сложные типы данных

// одна ссылка

// let a = [1, 2, 3];
// let b = a;
// b.push(4);

// console.log('a', a); // [1, 2, 3, 4]
// console.log('b', b); // [1, 2, 3, 4]

//разные ссылки

// let a = [1, 2, 3];
// let b = a.concat(); // переменная изолирована, копия массива
// b.push(4);

// console.log('a', a); // [1, 2, 3, ]
// console.log('b', b); // [1, 2, 3, 4]

//сравнение

// let a = [1, 2, 3];
// let b = a;
// b.push(4);

// console.log('a', a); // [1, 2, 3, 4]
// console.log('b', b); // [1, 2, 3, 4]

// let c = [1, 2, 3, 4]; // значения одинаковые, но разные ссылки

// console.log(a === b); // true - одна ссылка
// console.log(a === c); // false - разные ссылки
