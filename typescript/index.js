'use strict';
console.log('Hello World!')
// make object
const object ={
  name:'sameer',
  Age:20,
  goal:'blockchain developer'
}
console.log(object.name, object.Age, object.goal) 
// destructuring object
const {name,goal} = object;
console.log(name,goal) 
//template litering
const temp = object =>{
   return console.log(`${object.name} of karachi`)
}
temp(object);
// object literal
const car = 'Toyota'
const model =2023
const funhike = {car, model}
console.log(funhike)