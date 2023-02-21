
/*******let and const***********/

// var myName="Cinu";
// console.log(myName);

// myName="Bob";
// console.log(myName); //output: Bob


// let myName="Cinu";
// console.log(myName);

// myName="Bob";
// console.log(myName);//output:Bob


// const myName="Cinu";
// console.log(myName);

// myName="Bob";
// console.log(myName); //throw error




/***Arrow function */


// const multiply = number => number * 2;

// console.log(multiply(2));
// shorhand  of normal function...stored in a variable
//no more issues with  this keyword . it always keep its  context and  not changed at the run time.



/***********Export and inport */

// default export
// import person from './person.js'
// import per from './person.js'

// named export 
// // import {person as per} from './person.js'  // call with the exact name
// // import * from './person.js'


/****Class  -  blueprint of javascript objects, have both properties(variables) and methods (functions)*/

class Human{
constructor(){
    this.gender='male'
}
printGender(){
console.log(this.gender)
}
}



class Person extends Human {

constructor(){
    super()
this.name= "cinu"; 

this.gender="female";

}
printMyName(){
    console.log(this.name)
}
}


const person =new Person();
person.printMyName()
person.printGender()

/****Spread operator :used to split up an array/objects */
const oldArray=[1,2]
const newArray=[...oldArray,1,2]
console.log(newArray);
const oldObject={
    name:"cinu",

}
const newObject={...oldObject,newprops:1};
console.log(newObject);


/***rest opertor */
// used to merge a list of functn arg into an array


function  sum(...arg){
    console.log(arg)//[1,2,3]
}
sum(1,2,3,4,5,5,6)


// destructing - easily extract array elements or objects properties and store them in variables.

const num=[1,2,3];
let [num1, num2,num3]= num;
console.log(num1, num3);


const id={
    
    name1:"cinu",
    gender:"female"
};
let {name1, gender} = id;
console.log(name1, gender);



// Refereences and primitive types 
  const person1={
    name:"ccc"
  }
   const secperson= {...person1}

person1.name="sss"
   console.log(secperson);
   console.log(person1);//if you reassign the value, copying the pointer not the value.so always copy propertiesnot entire object


// arraymethod
   const number=[1,2,3];//execute the fun in each element and return new array
   const newNumberarry= number.map((num)=>{
    return num*2;
   })

   console.log(number);
   console.log(newNumberarry);


   //task

   const numberArray =[1,2,3]
  
   function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    return numberArray.map(number => {
        return {val: number}
       });

}

transformToObjects(numberArray)
