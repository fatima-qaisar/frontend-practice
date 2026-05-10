console.log("hello");
window.console.log("hello");
console.log(window);
console.dir(window); //both can be used to print the window object

console.log(document); //to access html in javascript   //window is global object
console.dir(window.document); //to see properties of document
//console.log ->prints object as an elemnet. we can print the DOM elements directly -> html code 
//console.dir ->to print properties and methods of special objects. it is also a part of the window object. ->object gets printed

console.log(document.body);
console.dir(document.body);
console.dir(document.body.childNodes[1]); //childNodes -> aik node mai kitne nodes hain
console.dir(document.head);
document.body.childNodes[5].innerText= "Hello. How are you";
let heading=document.getElementById("heading");//this will return value which can be saved in a variable.
console.dir(heading);
let texts=document.getElementsByClassName("text"); //returns an html collection -> very similar to an array
console.dir(texts);
console.log(texts);
let myClass=document.getElementsByClassName("myId");//empty html collection gets printed if class doesnt exist
console.log(myClass);
let myId=document.getElementById("myId"); //null gets printed if id doesnt exist
console.log(myId);

let button=document.getElementById("button");
console.dir(button);
let paragraphs=document.getElementsByTagName("p");
console.dir(paragraphs);  //again prints html collection -> innerText property allows you to see paragraph text
let firstElement=document.querySelector("p");// id/class/tag all can be passed -> returns first element.
console.dir(firstElement);
let allElements=document.querySelectorAll("p"); //to access all elemets use querySelectorAll->returns a node list
console.dir(allElements);
let element=document.querySelector(".text"); //first node ki hogi first class
console.dir(element);
let elements=document.querySelectorAll(".text"); //list of all nodes which are in that class
console.dir(elements);
let elementById=document.querySelector("#button");
console.dir(elementById);

console.dir(document.body.firstChild); //returns first node that is text node
console.log(document.querySelector("div"));
console.log(document.querySelector("div").children);

let div2=document.querySelector("#div2");
console.dir(div2);

console.log(div2.innerText);//Both of these return string
console.log(div2.innerHTML);

let heading2=document.querySelector("h2"); //its visibility is hidden so we use textContent property to see its text

let h5=document.querySelector("h5");
console.dir(h5.innerText);
h5.innerText=h5.innerText+" from Apna College.";
console.dir(h5.innerText);

let boxDivs=document.querySelectorAll(".box");
console.log(boxDivs[0]); //node list works like arrays. Values can be accessed index wise
let i=0;
for(boxDiv of boxDivs){
    console.log(boxDiv.innerText);
    boxDivs[i].innerText=`new unique value ${i}.`; //String interpolation
    console.log(boxDivs[i].innerText);
    i++;
}




