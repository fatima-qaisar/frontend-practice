function hello() {
    console.log("Hello in 1 second");
}

setTimeout(hello, 1000);//decides when to execute the function, in this case after 1 seconds (1000 milliseconds)
//timeout: 2sec=2000ms , we give it time in milliseconds. setTimeout also takes a callback function as its first argument, which is the function that will be executed after the specified time has elapsed. In this case, the callback function is hello, which will be executed after 1 second (1000 milliseconds).


console.log("one");
console.log("two");

//can do the above via arrow function as well
setTimeout(() => {
    console.log("Hello in 2 seconds");
}, 2000);

console.log("three");
console.log("four");

//the above 2 statements will be executed immediately, while the hello function will be executed after 2 seconds. This is because setTimeout is asynchronous and does not block the execution of the code that follows it.


function sum(a, b) {
    console.log(a + b);
}
function product(a, b) {
    console.log(a * b);
}
function calculator(a,b,sumCallback, productCallback) { 
    sumCallback(a, b);
    productCallback(a, b);
}
calculator(5, 10, sum, product);

// its also valid to pass the functions as arrow functions directly in the calculator function call, instead of defining them separately and then passing them as arguments. For example:
calculator(88, 10, (a, b) => console.log(a + b), (a, b) => console.log(a * b)); // this will calculate the product of a and b and log it to the console.


//nesting
 
for(let i = 1; i <= 3; i++) {
    str="0";
    for(let j = 1; j <= 3; j++) {
        str += j;
    }   
    console.log(str);
}
