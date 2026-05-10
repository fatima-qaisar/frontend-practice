//console.log("My name is Fatima Qaisar");
//console.log("I love JS.;")
fullName="Fatima Qaisar";
console.log("Name:", fullName);
price= 6.99;
x=null;
y=undefined;
console.log("Price:", price);
console.log(x);
console.log(y);
isFollow=true;
console.log(isFollow);
fullName=25;
console.log(fullName);
Console="hello";
console.log(Console);

//always use let/const keywords with variables
let age=24;
console.log(age);

//let age=21;  gives error. cannot be redeclared using let OR const both
//console.log(age);

var radius=4.5;
console.log(radius);
var radius=6.8; //gives no error. can be redeclared
console.log(radius);

const num=77; 
//age=92; error. const keyword for constant values e.g. const PI=3.14
console.log(num);

{let a; //by default declaring a variable but not assigning value to it gives it undefined value but variable is created.
console.log(a); //but it can be redefined in another block
//const b;   error. const decarations must be innitialized
const b= 6.5;
console.log(b);
var c=23;
console.log(c);
}

//console.log(a); gives error - block scope of variables declared with let/const. 
console.log(c);//  no error - global scope

//typeof can be used to see variable type on browser console. use console.log to print it on console from here

let d= null; // typeof gives object. null itself is a primitive data tpe - means absence of an object.

let e=BigInt("123"); //to store big integers. output has n with it e.g. 123n
let z=Symbol("Hello"); 

console.log(e);
console.log(z);

const student = {
    fulName: "Fatima Qasar", //key: value pairs
    age: 19,
    cgpa: 3.86,
    isPass: true
};
console.log(student);
console.log(student["fulName"]); //2 ways to access values in objects
console.log(student.age);


//Practice 
const product={
    name: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270
};

console.log(product);
