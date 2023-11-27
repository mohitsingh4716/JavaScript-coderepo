const name= "Mohit"
const repoCount= 50

// console.log(name + repoCount + "value");

// Modern use
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

// string declaration
const gameName =new String('MohitMS')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());

console.log(gameName.charAt(6));
console.log(gameName.indexOf('M'));

const newString =gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-8 ,4)
console.log(anotherString) //slice takes negative index value as well

const neweStringOne ="    Mohit   "  
console.log(neweStringOne)  
console.log(neweStringOne.trim()) //remove only white space 

const url= "https://mohitsingh20%kumar"
console.log(url.replace('20%','-')) // repalce the given value

console.log(url.includes('mohit')) // it return true or false 


