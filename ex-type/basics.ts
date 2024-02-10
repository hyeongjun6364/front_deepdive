let age: number;
age =12;

let age2: number = 25;

let hobbies: string[];

hobbies = ['dgd','gdsg','tjr'];

type Person = {
    name: string,
    age: number
}

let person:Person;
person ={
    name: 'Max',
    age:32
}

let course : string | number = 'react -the complete guide';
course = 123;

function Add3(a:number, b:number) {
    return a+b;
}

function insertAtBeginning<T>(array: T[], value: T){
    const newArray= [value, ...array];
    return newArray;
}

const demoArray= [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a','b','c'], 'd')
