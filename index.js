// console.log(true);
// console.log("Hello World!");
// console.log(42);
// /* let myVar = "Hello World!" */

// console.log(typeof 42);
// console.log(typeof myVar);

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
// const isSum50 = (n1 + n2 + n3 + n4) ;
// console.log(isSum50)

//Check if all numbers are divisible by 5. Cache the result in a variable.
let result1= (n1 % 5   === 0);
console.log(`The number ${n1} is divisible by 5 ${result1}`)
// let result2 = (n2 % 5 === 0);
//console.log(`The number ${n2} is divisible by 5 ${result2}`);
// let result3 = (n3 % 5 === 0);
//console.log(`The number ${n3} is divisible by 5 ${result3}`);
// let result4 = (n4 % 5 === 0);
//console.log(`The number ${n4} is divisible by 5 ${result4}`);
//Check if the first number is larger than the last. Cache the result in a variable.
let isFirstNumberLargerThan5 = (n1 > n4);
console.log(`The first number is larger than 5${isFirstNumberLargerThan5}`)

// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
let res = (n2 - n1 ) * n3;
// console.log(anyName);

// Find the remainder of dividing the result by the fourth number.
let findRemainder = (res / n4);
console.log(`The remainder of dividing the result by the ${n4} is ${findRemainder}`)

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isOver25 = !(n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25);
console.log(isOver25)
