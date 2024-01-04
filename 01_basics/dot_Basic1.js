
console.log("hello jee");
//variables

//let keyword is scope dependent so can't use outside nearest scope
// so use var
let a=5;
let ab=6
let Name="Mohit"
let Status=true;
// var is global variable use outside the scope

var id=564;
var id=656;
const Id=2343;
// Id=453;
console.log(Id);
console.log(id);

console.table([ab,Name,Status]);

// variable name
// ->cannot be a reserve keyword like if , let , var etc
// meaningfull 
// canoot be contain  space or - 
//camecase use like firstName , ageOfStudent

let b=7;
b="Mohit"
b=454
console.log(b);

//Reference types

//OBJECTS
//-> dot notation Person.age
//-> bracket notation person['age']

//ARRAY
//->used to contains list of items
let names=['love','haul','spring'];
names[1]="Mohit"
console.log(names[0]);

//PRE POST INCREMENT DECREMENT OPERATOR

let m=5;
let n=10;

let ans1=(++m)*(--n); //54
let ans2=(m++)*(--n); //48
console.log(ans1);
console.log(ans2);

//Assignment operator
let Abcd=12;
 Abcd/=2;
//a=a+5 or a+=5 || a=a*3 ort a*=3
 console.log(Abcd);

 //comparision operator
   //-> loose equality ans strict equality
 // === this check with datatype not by conversion
 console.log("2" === 2);  // =>false
 console.log("2"==2); //=>true

 //Ternary operator 
// condition ? val1 : val2
let age=21;
let StaTus=(age>=18) ? 'I can vote': 'Cannot vote';
console.log(StaTus);

// LOGICAL OPERATOR
//  && || !
// with Non- Boolean
// FALSCY -> UNDEFINED , NULL, 0, FALSE, NaN
// TRUTHY ->Anything that  is not falsy
let value=(false || true) // (falscy || Truthy) -> truthy
let NewVal=(false || "mohit")
console.log(NewVal);
console.log(value);

//Bitwise Operator
//  AND-> & OR-> |
console.log(2 & 3); 
console.log(2 | 3); 

// syntax:
// Switch(expresion){
//     case1:[] break;
//     case2:[] break;
//     default:[]
//     }

let num=0;
switch(num){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break
    case 3: console.log('C');
    break
    default: console.log('D')
}

//LOOPS
console.log("for loop");
 for(let i=0;i<5;i++){
    console.log(i);
 }
 console.log("while loop");
 let i=0;
 while(i<5){
    if(i==3){
        break;
    }

    console.log(i);
    i++;
 }
 console.log("do while loop");
 //do while()
  let y=1
  do{
    console.log(y);
    y++
  }while(y<5);

   console.log();
  myCity="Muzaffarpur";
  myCity=12321
  myCity=(2 &3)
  console.log(myCity);
