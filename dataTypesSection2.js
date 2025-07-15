// Concatination in javascript

/* In js, the + sign is not only used for arithmethic addition but also for string concatination.
 When the + operator is used with strings , it concatinates the string together.*/

/* It's important to note that if any operand of the + operator is a string, javascript will treat the other 
 operands as string as well, resulting in string concatination . If both operands are number, the + operator 
 perform the numeric addition.*/
 
const str = "hello " + "World";
console.log(str);

// Type Coercion / type casting:

/* Type Coercion is the autometic conversion of "Values" from one data type to another.
  It is a fundamental part of javascript and can be used to make code readable and efficient.

  Types of  type Coercion:
  There are two types of Coercion in javaScript :
  Implicit and ecplicit: Implicit Coercion  happens automatically,while explicit Coercion is done manually by the 
  Programmer.
*/

/* It's worth nothing that type Coercion can lead to unexpected results , so it's essential to be aware of
  how javaScript handles these situations.
 */

  let sum = "maha" - 5;
  console.log(sum) //NaN

   let sub = "10" - 5;
  console.log(sub) //5   because of implicit coercion

    let concat = "10" + 5;
  console.log(concat) //105


// Tricky Interview Questions:

console.log(10+"20"); //1020
console.log(9-"5");   //4
console.log("Java" + "Script"); //JavaScript
console.log("MahA" - "khan"); //NaN
console.log(true+true); //2
console.log(true+false); //1
console.log(false+true); //1
const bool = false+false;
console.log(typeof bool); //number
console.log(true - false); //1
