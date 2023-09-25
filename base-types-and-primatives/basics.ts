//Primatives - Use lowercase

let age: number

age = 12.5;

let userName: string;

let isInstructor: boolean;

isInstructor = true;

let geese: null;  //this will basically always throw error. 

let mushroom: any; //this is allowed but counter to the point of typescript

//More Complex Types: Arrays, Objects

let hobbies: string[];

hobbies = ['Geese', 'Mushrooms'];

// let person: {
//      name: string;
//      age: number;
// }; //a type assignment of object,  



//Type inference

let course = 'React - The Complete Guide'; 

//TypeScript infers that this is a string. 
//It is not considered good practice to use explicit type declarations unnecessarily
//The above line that relies on type inference is 'correct' as written.  

// course = 12345; //causes error due to type inference. 

//##Union Types

let newCourse: string | number = 'React - the Complete Guide: Reloaded'; 

//Union types can be used to declare a variable that takes more than one type. No cap. 

//##Aliases 
//This is to reduce redundant declaration of objects

type Person = {
     name: string;
     age: number;
};

let person: Person;

person = {
     name: 'Max',
     age: 32
};

let people: Person[];

//##Functions and Types

function add(a: number, b: number) {
     return a + b;
}  

//TypeScript is inferring the return of a number when we write code the adds to numbers.

//However we can explicitly declare a return type after the statement, this could be useful to do exotic things. 

function specialPrint(value: any) {
     console.log(value);
}

//'Void' exists as a special return type.

//Void means this function never returns. 

//##Generics

function insertAtBeginning<T>(array: T[], value: T) {
     const newArray = [value, ...array];
     return newArray;
}

//Possibly aiding utility functions
//Denoted by a 'generic identifier' often T in angle brackets: <T>
//Tells TypeScript to essentially make a inference chain and that the type and that the generics match
//Generics allow 'Type-Safe' yet flexible.

const demoArray = [1, 2, 3];

const stringArray = ['a', 'b', 'c']

const updatedStringArray = insertAtBeginning(stringArray, 'd');

const updatedArray = insertAtBeginning(demoArray, -1)

//##*Classes and Interfaces*

//I don't really understand why we have to declare types on both the class definitiopn and the constructor. 
//Okay nevermind, why didn't he just lead with the shorthand?
//'private' is an explicit keyword to denote that the property may only be accessed by class methods. 

class Student {
     // firstName: string;
     // lastName: string;
     // age: number;
     // private courses: string[];

     constructor(
          public firstName: string, 
          public lastName: string, 
          public age: number, 
          public courses: string[]
          ){}

     //Super cool constructor shorthand

     enroll(courseName: string) {
          this.courses.push(courseName);
     }

     listCourses() {
          return this.courses.slice()
     }
}



const student = new Student('Pat', 'Ranval', 34, ['Angular']);
student.enroll('React');

//student.courses;
//With the courses property private, trying to access this produces an error.  
//student.listCourses();
//This method does work because it's defined within the class to call courses property

//##Working with Interfaces

//Interface code will not be compiled to JavaScript

//Interfaces can be implemented by classes

//Use "implements" keyword to force class property

//A class built from an implemented class can have properties in addition to the class it was implemented from, but MUST contain all the properties of the class being interfaced



interface Human {
     firstName: string;
     age: number;

     greet: () => void;
}

let max: Human;

max = {
     firstName: 'Max',
     age: 32,
     greet() {
         console.log('Hello');
     },
}

class Instructor implements Human {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet() {
        console.log('Howdy');
    }
}

let jim: Instructor;

jim = {
     firstName: 'Jim',
     lastName: 'Bowowowoway',
     age: 58,
     greet() {
         console.log('Hello');
     },
}

//##CONFIGURATION
//npx tsc --init


