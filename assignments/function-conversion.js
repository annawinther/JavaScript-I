console.log("Function-Conversion Start Here");

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();


var myFunction = (param) => param;

console.log(myFunction("Function was invoked!"));

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

var anotherFunction = (param) => param;
console.log(anotherFunction("Example"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
 
var functionAdd = (param1, param2) => param1 + param2;
console.log(functionAdd(4,2))


// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
var functionSub = (param1, param2) => param1 - param2;
console.log(functionSub(5,3))


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple); 



