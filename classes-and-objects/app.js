const student = {
    fullName: "John Doe",
    age: 20,  //properties or state
    grade: "A",
    printGrade: function() {  
        console.log(`${this.fullName} received a grade of ${this.grade}.`); //this means the current object, which is student in this case. It allows us to access the properties of the object within its methods.
    }
};
    /* Can make an arrow function too but it will not work because of the this keyword.  
       Arrow functions inherit the this value from their enclosing context, which is not the student object.
       const obj = {
        name: "Fatima",
        sayName: () => {
        console.log(this.name);
      }
    };
    obj.sayName(); // undefined (or window.name in browser)

    They’re useful when you want to preserve the outer this, like inside methods:
    const obj = {
     name: "Fatima",
     sayName: function() {
     setTimeout(() => {
      console.log(this.name);
    }, 1000);
    }
};
    obj.sayName(); // "Fatima"
*/
/* Each javascript object has a special property called prototype, which is a reference to another object. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds it or reaches the end (null). 
   This allows for inheritance and sharing of properties and methods among objects.
   Prototype itself is an object, and it can have its own prototype, creating a chain of prototypes. When you create a new object using a constructor function, the new object inherits properties and methods from the constructor's prototype. This is how JavaScript implements inheritance and allows for code reuse.

*/
student.printGrade(); // John Doe received a grade of A.

const employee = {
    calTax() {   //You dont need to write function keyword when defining a method in an object literal. This is a shorthand syntax introduced in ES6 (ECMAScript 2015) for defining methods in objects.
        console.log("Tax rate is 10%");
    }
};

employee.calTax(); // Tax rate is 10%

/*
const fatimaQaisar = {
    salary: 50000,
};

fatimaQaisar.__proto__ = employee; // This sets the prototype of fatimaQaisar to employee, allowing it to access the calTax method.
//object2.__proto__ = object1; // This sets the prototype of object2 to object1, allowing object2 to access properties and methods defined in object1.

*/
const fatimaQaisar = {
    calTax() {
        console.log("Tax rate is 15%");
    }
};

fatimaQaisar.calTax(); // Tax rate is 15%

class ToyotaCar {
   constructor(brand, mileage) {
     console.log("Toyota car is being created..."); //whenever the object is created, the constructor method is invoked.
     this.brand=brand;
     this.mileage=mileage;

    }
    start() {
        console.log("Toyota car is starting...");
    } //in class you dont need to separate methods with commas like in object literals. Each method is defined as a function within the class body, and they are automatically added to the prototype of the class.
    stop() {
        console.log("Toyota car is stopping...");
    }
    setBrand(brand) {
        this.brand = brand; //this refers to the instance of the class that is being created. When you create a new instance of the ToyotaCar class, you can call the setBrand method to set the brand property for that specific instance.
    }
}//in the prototype of the ToyotaCar class, there are two methods: start and stop and a constructor method that is automatically created by JavaScript when you define a class. The constructor method is used to initialize the properties of the class when a new instance is created. If you don't define a constructor, JavaScript will create a default one for you.

let myFortuner = new ToyotaCar("Fortuner", 10); // The new keyword creates a new instance of the ToyotaCar class, allowing us to call its methods.
myFortuner.start(); // Toyota car is starting...
myFortuner.stop(); // Toyota car is stopping...
console.log(myFortuner.brand); // Fortuner
console.log(myFortuner.mileage); // 10
let myCorolla = new ToyotaCar("Corolla", 12);
//we prefer classes to create multiple objects for same template.
// the object itself also has a constructor method in its prototype chain from which it inherits properties and methods. The constructor method is used to initialize the object when it is created. When you create a new instance of a class, the constructor method is called automatically to set up the initial state of the object. 
//on console when u print object, you'll see the class name and the properties of object. Because the object is of that class

//Inheritance
class Parent{
    hello() {
        console.log("Hello from parent class");
    }
}
class Child extends Parent {
}

let childObj = new Child();
childObj.hello(); // Hello from parent class
//The Child class inherits the hello method from the Parent class, allowing us to call it on an instance of the Child class. This is an example of inheritance in JavaScript, where a child class can access properties and methods of its parent class.
 

class Person {  
    constructor(name){
        this.name = name;
        this.species = "homosapiens";
        console.log("Person(Parent) is being created...");
    }
    eat() {
        console.log("Person is eating...");
    }
    sleep() {
        console.log("Person is sleeping...");
    }   
    work() {
        console.log("Person is working...");
    }
}

class Engineer extends Person {
    constructor(name, branch) { //agar name super ko pass na kia tou indefined ayega if u try to access it via child class object.
        super(name); // Invoke the parent class constructor
        console.log("Engineer(Child) is being created...");
        this.branch = branch; //will give an error if super is not called because the constructor of the parent class needs to be called to initialize the properties of the parent class before we can use this keyword in the child class.
    }
    work() {
        super.eat(); // Call the eat method from the parent class bcz ev engineer eats then works. This is how you can call a method from the parent class within a method of the child class using the super keyword.
        console.log("Engineer is working...");
    }
}

class Doctor extends Person {
    work() {
        console.log("Doctor is working...");
    }
}
    //Method overriding allows the Engineer and Doctor classes to provide their own implementation of the work method, while still inheriting the eat and sleep methods from the Person class. This way, we can create instances of Engineer and Doctor that have their own specific behavior for the work method, while still sharing common functionality from the Person class.

let engineerObj = new Engineer("Fatima", "Software Engineering");
engineerObj.eat(); // Person is eating...
engineerObj.sleep();    // Person is sleeping...
engineerObj.work(); // Engineer is working...   
console.log(engineerObj.species); // homosapiens

console.log(engineerObj.name); // Fatima

console.log();

let profile= "This is a profile of a user: ";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

viewProfile() {
    console.log(profile + this.name); // This will work because of closure. The viewProfile method has access to the profile variable defined outside the class because of JavaScript's closure mechanism, which allows functions to access variables from their outer scope.
}
}

let userObj = new User("John", "john123@gmail.com");
userObj.viewProfile();
 
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }   
    editProfile() {
        profile = "This is an edited profile of a user: "; 
    }
}

let adminObj = new Admin("Admin", "admin123@gmail.com");
adminObj.viewProfile();
adminObj.editProfile();
adminObj.viewProfile();  

//try-catch for error handling

let a=10;
let b=23;
 console.log(a+b); // 33
 console.log(a+b); // 33
 try {
    a+c; // ReferenceError: c is not defined
} catch (error) {  
    console.log(error);
}

console.log(a+b); // 33, the program continues to run even after the error is caught and handled in the catch block. The error does not affect the execution of subsequent code, allowing the program to continue functioning normally.
