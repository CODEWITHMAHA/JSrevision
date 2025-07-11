❓ Q1: What is the difference between null and undefined in JavaScript?

undefined means a variable has been declared but hasn’t been assigned a value yet.

null is an assignment value that represents the intentional absence of any object value.

✅ Key Differences:
1.Aspect	                undefined
    Type                      undefined
    set by                    JavaScript (automatically)
    Use Case                  Uninitialized variables, missing parameters
    Equality	              undefined == null → true (loose equality)

2.Aspect                    null
    Type                     object (due to a historical bug in JavaScript)
    set by                   Developer (manually)
    Use Case                 Explicitly clearing or resetting a variable
    Equality                 undefined === null → false (strict equality)

❓Q2: What is the result of " typeOf null " in js?
       Object(This is a known bug in javaScript).

       typeOf null = 'object' ; ----> true

❓Q3: What is the purpose of the typeof operator in JavaScript?
        The typeof operator is used to determine the data type of a given variable or value at runtime. It helps in type-checking and debugging.       
        
        const value = 1;
        console.log(typeof value) ===> number

        const value = false;
        console.log(typeof value) ===> boolean

❓Q4: What are the primitive data types in js?
        1.String 2.Number 3.Boolean 4.Undefined 5.null 6.BigInt 7.symbol

❓Q5: Convert the String to a number?
         we just need to add '+' sign before the string.

         let myFavNum = '10';
         console.log(typeOf myFavNum)  ====> String
         console.log(typeOf +myFavNum)  ====> number
         console.log(typeOf Number(myFavNum))  ====> number

❓Q6: Convert the number to a string?         
          we just need to add an empty string after the number.
           
         let myFavNum = 10;
         console.log(typeOf myFavNum)  ====> number
         console.log(typeOf myFavNum + "")  ====> string
         console.log(typeOf String(myFavNum))  ====> string 