// datatypes are basically of two types primitive and non primitive.in primitive number, string,undefined,null,bigint,boolean,symbol etc and in non primitive  objects,array,functions etc

// number The Number data type in JavaScript includes both integers and floating-point numbers. Special values like Infinity, -Infinity, and NaN represent infinite values and computational errors, respectively.The Number data type in JavaScript includes both integers and floating-point numbers. Special values like Infinity, -Infinity, and NaN represent infinite values and computational errors, respectively.
let a=89;
let b=45;
let c=7.8;
let d=Infinity;
let e= 'something here too' / 2;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)


// A String in JavaScript is a series of characters that are surrounded by quotes. There are three types of quotes in JavaScript, which are.
let s1 = "Hello There";
console.log(s1); 

let s2 = 'Single quotes work fine';
console.log(s2); 

let s3 = `can embed ${s1}`;
console.log(s3);

//The boolean type has only two values i.e. true and false.
let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);

//The special null value does not belong to any of the default data types. It forms a separate type of its own which contains only the null value.
let age = null;
console.log(age)


//Undefined
//A variable that has been declared but not initialized with a value is automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it.
let x;
console.log(x);



//Symbols, introduced in ES6, are unique and immutable primitive values used as identifiers for object properties. They help create unique keys in objects, preventing conflicts with other properties.
let y = Symbol("Geeks");
let  z = Symbol("Geeks");
console.log(y == z);


//big int

let n = BigInt("0b1010101001010101001111111111111111");
console.log(n);