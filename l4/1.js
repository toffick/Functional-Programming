// 1
const foo = (func, param) => func(param);

console.log(foo((a) => a * a, 2));
console.log(foo((a) => a * a * a, 223123));
console.log(foo((a) => a * a - 5, 4));


// 2
const filter = (array, func) => array.filter(item => func(item))

console.log(filter([11, 4, 97, 3, 10], (x) => x < 10));



// 3


const compose = fcArray => args => fcArray.reduceRight((item, fn) => fn(item), args);


const a = (n) => n + 1;
const b = (n) => n * 8;
const fcArray = [a, b];

console.log(1)
console.log(compose(fcArray)(5));
console.log(compose(fcArray)(6));
console.log(compose(fcArray)(7));