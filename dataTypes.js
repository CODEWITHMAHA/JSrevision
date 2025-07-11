// Data types defines the type of values that a variable can hold.
// Types of premitive data types
//1. Number: Neumeric Values:
var myFavNum = 2;
console.log(myFavNum);

//2.Strings: Represent a sequence of characters enclosed in single or double quotes.
var myName = 'Mahrukh khan';
console.log(myName); 

// var myName = Mahrukh; //ReferenceError: Mahrukh is not defined
// console.log(myName); 

// 3.Boolean : Represent a logical entity with two values : true or false
var isTrue = false;
console.log(isTrue);

var isRaining = true;
console.log(isRaining);

// 4.Undefined: It represent the absence of a value or an uninitialized variable.
var calculate;
console.log(calculate);  //undefined 

// 5.Null :Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
var badMemories = null;
console.log(badMemories);

// 6.BigInt: Represents integers of arbitrary precision(available since ECMAScript 2020)
 const bigNumber = 3367938472980133
 console.log(bigNumber);
 
// 7.Symbol:Represents a unique and immutable data type, often used to create unique identifiers.
 const mySymbol = Symbol('description')
 console.log(mySymbol);
 

