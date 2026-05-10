let numbers=[99, 92, 95, 97];
console.log(numbers);
console.log(numbers.length); //array property 
console.log(typeof numbers); //array itself is an object type
console.log(numbers[0]);
console.log(numbers[6]);
numbers[0]=75;             // array is mutable. string is immutable
let heroes=['ironman', 'superman', 'spiderman', 'hulk', 'antman'];

//for loop
for(let i=0; i<heroes.length ;i++){
    console.log(heroes[i]);
}

//for of loop
for(let hero of heroes){
    console.log(hero.toUpperCase());
}

//Practice  q1
let marks=[85, 97, 44, 37, 76, 60]
let sum=0;
for(let i=0; i<marks.length ;i++){
    sum+=marks[i];
}

let average=sum/marks.length;
console.log(`Total marks of the class= ${sum}`);  //template literal 
console.log(`Average marks of the class= ${average}`);

//Practice q2
let prices=[250, 645, 300, 900, 50];  //for of loop can be used to access the values but not change them. We need to change value at the index to achieve that.
for (let i=0; i<prices.length; i++){
    let offer = prices[i]/10;   
    prices[i]=prices[i]-offer;
    console.log(prices[i]);
}

//same qs using for of loop can be solved this way
let items=[250, 645, 300, 900, 50]; 
let i=0;
for (let val of items){
    console.log(`Value at index ${i}= ${val}`);
   let offer=val/10;
   items[i]-=offer;
   console.log(`Value after offer= ${items[i]}`);
   i++;
}
console.log(items.toString()); //returns a new string consisting of the elements of the array
let fruits=['apple','strawberry', 'banana', 'apricot', 'tagerine'];
console.log(fruits);
fruits.push('lychee');  //unshift() to add value in start of array
console.log(fruits);
let deletedValue= fruits.pop();  //shift() to delete and return first value
console.log(deletedValue);

let akatsuki=['nagato', 'konan', 'itachi', 'obito'];
let leafShinobi=['naruto', 'shikamaru', 'sakura', 'sasuke', 'hinata'];
let sunaShinobi=['gaara', 'temari', 'kankuro'];
let narutoCharacters=leafShinobi.concat(akatsuki,sunaShinobi); //new array. old arrays remain unchanged
console.log(narutoCharacters);

let arr=[1,2,3,4,5,6,7];
let newArr=arr.splice(2,2,101,102,103);
console.log(newArr);
console.log(arr);
//Add element
arr.splice(2,0,105);
//Delete element
arr.splice(3,1);
//Replace element
arr.splice(2,1,101);

let arr2=arr.splice(3);//returns array of elements after index 4






