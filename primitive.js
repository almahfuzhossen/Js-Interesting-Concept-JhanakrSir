/* 
data types


primitive data types
1- number
2- string
3- boolean
4- undefined
5- null
6- symbol

non primitive data types
1- object

*/

let a = 'hello';
let b = a;
console.log( a, b);
a = 'gello';
console.log(a, b)

const x = { job: 'web developer'}
const y = x;
console.log(x, y)

x.job = 'front end developer';
y.job = 'backend developer';
console.log(x , y)