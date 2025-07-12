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


var day = 'sunday';
if (day === 'sunday') {
    console.log('Go to watch movie');
} else {
    console.log('Go to work');
}


// Truty and Falsy values in JavaScript
var truthyValue = {};
if (truthyValue) {
    console.log('This is a truthy value');
    /*
      true
       Any non-empty string('Hello')
       Any non-zero number (32)
       Arrays and objects, even if they are not empty. 
    */
} else {
    console.log('This is a falsy value');
    /*
      false
       0
       NaN
       null
       undefined
       ''
    */
}

//============================ParseInt & ParseFlaot section================================

const myString = '23';
const myNumber = parseInt(myString);
console.log(myNumber); // 23
console.log(typeof myNumber); // number
console.log(myString); // '23'  //parseInt does not mutate the original variable.returns a new number

const myString2 = '23.45';
const myNumber2 = parseFloat(myString2);
console.log(myNumber2); // 23.45
console.log(typeof myNumber2); // number
// parseFloat does not mutate the original variable.returns a new number

console.log(parseInt('23')); // 23
console.log(parseInt('23.45',10)); // 23
console.log(parseInt('23.45abc')); // 23
console.log(parseInt('abc23')); // NaN
console.log(parseInt('073')); //73

console.log(parseInt('&23')); // NaN
console.log(parseInt('23.45', 2)); //NaN
console.log(parseInt('-23')); // -23
console.log(parseInt('xyz'));// NaN

console.log(isNaN('MAHA')); // true
console.log(isNaN('23')); // false

// NaN === NaN , why is it false ?

if (NaN === NaN) {
    console.log('NaN is equal to NaN');
}else{
    console.log('NaN is not equal to NaN'); // This will be executed
}

if('maha' === 'maha'){
    console.log('Strings are equal'); // This will be executed
}else{
    console.log('Strings are not equal');
}

console.log(parseInt("xyz")) // NaN
console.log(parseInt("@#$")) // NaN

// in both cases, we obtain NaN but the reason is different.