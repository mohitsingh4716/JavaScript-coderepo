
//ARRAYS
//-> object reference type
//=>collections of items

let numbers=[1,4,6,5,9];

console.log(numbers);
//end-> push
numbers.push(8);
console.log(numbers);
// begining -> unshift
numbers.unshift(7);// it is used to push elemenyt in begin
console.log(numbers);
//middle-> splice
numbers.splice(2,0,'s','o','m','i');
console.log(numbers);

let Numbers=[1,4,5,7];
//searching 
console.log(Numbers)
console.log(Numbers.indexOf(7));

//we want to check if number exist in a array or not
if(Numbers.indexOf(4) !=-1){
    console.log("present");
}
else{
    console.log("absent");
}
console.log(Numbers.includes(9));
console.log(Numbers.indexOf(4,2));

//Object wala array
let courses=[
    {no:1, naam: 'Love'},
    {no:2, naam:'Rahul'}
];
// console.log(courses);

// let course= courses.find(function(course){
//     return course.naam=='Rahul';
// })

// this can sort by using arraow fun => in palce of function
let course= courses.find((course)=>course.naam==='Rahul');

console.log(course);

//REMOVE ELEMENT
//end =>pop()
//beginning=>shift()
//middle=>splice(index,countdelet, )

let numb=[1,2,3,4,5,6,7];
console.log(numb);
//end =>pop()
numb.pop();
console.log(numb);
//beginning=>shift()
numb.shift();

console.log(numb);
//middle=>splice(index,countdelet, )
numb.splice(2,1);
console.log(numb);

//EMPTYING ARRAY
let number=[6,5,4,3,2,1];

let num2=number;

// number=[];
// number.length=0; //=> this way is best way to empty array

//also by using *splice*(0,length) method
number.splice(0,number.length);

console.log(number);
console.log(num2);

// COMBINING & SLICING ARRAYS
let first=[1,2,3];
let second=[4,5,6];

//concat
console.log('After concat the first and second');
let combine=first.concat(second);
console.log(combine);

//slice(startindex, endIndex)->end index excludes
// let sliced=combine.slice() => all will sliced make copy
// let sliced=combine.slice(3); =>after 3 index all sliced
let sliced=combine.slice(2,5);
console.log(sliced);

// SPREAD OPERATOR (...combine)
console.log('Using Spread operator ...');
let First=[1,2,3,4];
let Second=[5,6,7,8];

let combined=[...First, 'a', ...Second,'b',true];
console.log(combined);

// copy kiase create krte haii
let another =[...combined]


// ITERATING Array
let arr=[10,20,30,40,50];

// for(let value of arr){
//     console.log(value);
// }

//for each loop
// arr.forEach(function(number){
//     console.log(number);
// })

// function hatao => arrow lagao
arr.forEach(number =>console.log(number));

// joining arrays
let nu=[10,20,30,40,50];
const joined= nu.join(',');

console.log(joined);

// Split=>create a array
let messages="This is my first messsage ";
let parts= messages.split(' ');

console.log(parts);

let jjoined=parts.join('_');
console.log(jjoined);

// SORT ARRAYS
// 23,34,32,43 =>23,32,34,43
let arrr=[3,34,32,43];
arrr.sort();

console.log(arrr);
arr.reverse();
console.log(arr);


// Filtering Arrays
console.log("Filtered value");
let nums=[-2,3,4,-3,0];

// let filtered= nums.filter(function(value){
//     return value>=0;
// });

// this is converted into arrow function=>
let filtered= nums.filter (value=> value>=0);
console.log(filtered);

// MAPPING ARRAYS
// maps each elements of array to something else

let num=[7,8,9,10];

// let items =num.map(function(value){
//     return 'students-no' + value;
// })

let items =num.map(value=>'students-no' + value);

console.log(items);

