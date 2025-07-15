// EXPRESSION AND OPERATORS:

// combination of operands and  operators make expression.
var exp = 5 +  5;  //expression
console.log(exp);

//Types of operators in JS.
/*
1.Assignment operators.
2.Arithmetic operators.  In arithmetic we increment and decrement operator
3.comparison operators.
4.Logical operators.
5.String operators.
6.conditional(tarnary) operators.
*/

//1. ASSIGNMENT OPERATOR:
      /*Assignment operator in programming are symbol used to assign values to variables.
        They take the value of the right side of the operator and assign it to the variavle on the left side.
      */

    var myFavNum = 2;
    console.log(myFavNum)
    
//2.Arithmetic operators:
//Addition +

var a = 5;
var b = 7;
var sum = a+b;
console.log(sum);

//Subtsract
var a = 5;
var b = 7;
var dif = a-b;
console.log(dif);

//Multiplication
var a = 5;
var b = 7;
var pro = a*b;
console.log(pro);

//division
var a = 5;
var b = 7;
var dif = a+b;
console.log(dif);

//Modulus
var a = 5;
var b = 7;
var mod = a%b;
console.log(mod);

// Interview Questions
var result = "hello" / 2;
console.log(result);  //NaN

var result2 = 0.1 + 0.2;
console.log(result2);  //0.30000000000000004

/*when you are working with floating-point numbers in javascript, consider using mothod like toFixed() 
  when precise decimal representation is necessary.
*/

var result3 = 0.1 + 0.2;
console.log(result3.toFixed(2));  //0.30



//3.String operators:
//There are few more ways to concatenate string in js, the most comman way is the + operator
let concatinates = "hello " + "world";
console.log(concatinates);

//4.:comparision operators
/*comparision operators in js are used to compare values and return a boolean result*/

//? Equal(==):Checks if two values are equal, performing type coercion if necessory.
console.log(5=='5') //true

//?Strict Equal(===):Checks if two values are equal,without performing type coercion.
console.log('5' === 5) //false