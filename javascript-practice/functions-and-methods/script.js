function myFunction(msg,n){ //parameter ->input
    console.log("I love coding.");
    console.log("Strawberries are the best.");
    console.log(msg); //console.log(msg*n); gives error NaN (Not a number)
}
myFunction("JavaScript",100); //argument

function sum(x, y){
    return x+y; //parameters are local variables for function. they have block scope.
}
console.log(sum(3,77));

//Multiplication Function
function product(x, y){
    return x*y;
}

//arrowProduct is a normal variable and its value can be changed. the function itself comes after the assignment operator.
const arrowProduct=(x, y)=>{ 
      return x*y;
};

console.log(arrowProduct);
let result=arrowProduct(6,7);
console.log(result);

const printHello=()=>console.log("Hello");

console.log(printHello());
console.log(printHello); 

let count=0;
function countVowels(str){
     for(const char of str){
        if(char=='a'||
           char=='e'||
           char=='i'||
           char=='o'||
           char=='u'){
            count++;
        }
     }
     return count;
}

let numOfVowels=countVowels("Rabbit is cute");
console.log(numOfVowels);

const countVow=(str)=>{
    let count=0;
    for(const char of str){
        if(char=='a'||
           char=='e'||
           char=='i'||
           char=='o'||
           char=='u'){
            count++;
        }
     }
     return count;
}

let arr =[1,2,3,4,5];                     //forEach will take each element of array and pass it to function as value
arr.forEach(function printVal(val){      //value at each ndex
      console.log(val);                       
});

//forEach is a higher order function
let arr2=["Lahore", "Multan", "Faisalabad"];
arr2.forEach((val, i, arr)=>{
    console.log(val.toUpperCase(), i, arr);
});

//Practice
let numArray=[2,3,4,5,6,7];
console.log("\nforEach Practice")
numArray.forEach((val)=>{
    console.log(val*val); //val**2
});
let calcSquare =(num)=>{
    console.log(num*num);
};
numArray.forEach(calcSquare); //Also a valid way to write call back function. pass the variable that contains the function definition

//finding max value
console.log("\nFinding Maximum Value");
let arr3=[8, 6,2,77,3];

const maxValue=arr3.reduce((prev,curr)=>{
    return prev>curr? prev:curr;
});
console.log(maxValue);

//Filter method
let marks=[87, 93, 67, 56,76, 95];
let toppers=marks.filter((val)=>{ 
    return val>90;
});
console.log(toppers);

//Reduce Method
let n= prompt("Enter a number: ");
let arr4=[];
for (let i=1; i<=n ; i++){
    arr4[i-1]=i;
}
console.log(arr4);
let factorial=arr4.reduce((prev, curr)=>{ 
    return prev*curr;
});
console.log(factorial);