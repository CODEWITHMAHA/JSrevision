-------------------Expressions and operators---------------------------------
Interview Questions

    var result = "hello" / 2;
    console.log(result);  //NaN

    var result2 = 0.1 + 0.2;
    console.log(result2);  //0.30000000000000004

    when you are working with floating-point numbers in javascript, consider using mothod like toFixed() 
    when precise decimal representation is necessary.


    var result3 = 0.1 + 0.2;
    console.log(result3.toFixed(2));  //0.30

------------------------------------------------comparision operators------------------------------------------

comparision operators in js are used to compare values and return a boolean result


//? Equal(==):Checks if two values are equal, performing type coercion if necessory.
console.log(5==5) //true

//?Strict Equal(===):Checks if two values are equal,without performing type coercion.
console.log('5' === 5) //false    

