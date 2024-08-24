
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);/* // ["apple", "banana", "orange"]


let fruits = ["apple", "banana", "orange"];
let last = fruits.pop();
console.log(fruits); // ["apple", "banana"]
console.log(last);   // "orange"


let fruits = ["apple", "banana", "orange"];
let first = fruits.shift();
console.log(fruits); // ["banana", "orange"]
console.log(first);  // "apple" 


let fruits = ["banana", "orange"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "orange"]


let fruits = ["apple", "banana", "orange", "mango"];
let citrus = fruits.slice(1, 3);
console.log(citrus); // ["banana", "orange"]


let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "mango");
console.log(fruits); // ["apple", "mango", "orange"]


let fruits = ["apple", "banana", "orange"];
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// apple 0
// banana 1
// orange 2


let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
console.log(roots); // [1, 2, 3]


let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]


let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(total, current) {
  return total + current;
}, 0);
console.log(sum); // 10


let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(function(num) {
  return num % 2 === 0;
});
console.log(firstEven); // 2


let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false */

