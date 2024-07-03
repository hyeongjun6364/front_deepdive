let age: number;
age =12;

let age2: number = 25;
// string 배열
let hobbies: string[];
hobbies = ['dgd','gdsg','tjr'];
// number 배열
let age3: number[];
//boolean 배열
let isBoolean: boolean[];

type Person = {
    name: string,
    age: number
}

let person:Person;
person ={
    name: 'Max',
    age:32
}

let  course : string | number = 'react -the complete guide';
course = 123;

function Add3(a:number, b:number) {
    return a+b;
}
//generics 연습 1
function insertAtBeginning<T>(array: T[], value: T){
    const newArray= [value, ...array];
    return newArray;
}



const demoArray= [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a','b','c'], 'd')
//generic 연습 2
interface Mobile<T>{
    name:string;
    price:number;
    option:T;
}

const m1: Mobile<object>={
    name:"s21",
    price:1000,
    option:{
        color:"red",
        coupon:false,
    }
}
const m2: Mobile<string>={
    name:"s21",
    price:1000,
    option:"good"
}

//generic 연습 3
interface User{
    name:string;
    age:number;
}
interface Car{
    name:string;
    color:string;
}

interface Book{
    price:number;
}

const user:User = {name:'a',age:10};
const car:Car = {name:"bmw",color:"red"};
const book:Book = {price:3000};

function showName(data):string{
    return data.name;
}

showName(user);
showName(car);
showName(book);