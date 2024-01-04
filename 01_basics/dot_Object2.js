//  Object is a collection of Key value s
let rectangle={
    length:1,
    breadth: 2,

    draw: function(){
          console.log('drawing rectangle');
    }
};
// using dot(.) we use property or method to acces object 
// Rectangle.lenght => 1;

//OBJECT CREATION
//factory function
function createRectangle(len,bre){
    return rectangle={
        length:len,
        breadth: bre,
    
        draw: function(){
              console.log('drawing rectangle');
        }
    };
}
let RectangleObj1=createRectangle(5,4);
let RectangleObj2=createRectangle(3,6);
let RectangleObj3=createRectangle(1,4);

//camelcase -> numberOfStudent
//CONSTRUCTOR FUNCTION
// use pascal notation-> first letter of every word is Capital -> NumberOfStudent
function Rectangle(len,bre){
    //this-> always show the current object
    // if no obj then show empty obj
    this.length=len;
    this.breadth=bre;
    this.draw= function(){
        console.log('drawing'); 
    }
}

// object creation using constructor
//new keyword show empty obj
let reactangleObject= new Rectangle(3,8);

// DYNAMIC NATURE OF OBJECTS
 reactangleObject.color='yellow'
 console.log(reactangleObject);
//remove any property
 delete reactangleObject.color;
 console.log(reactangleObject);

 let Rectangle1=new Function(
    'length', 'breadth',
    `this.length=length;
    this.breadth=breadth;
    this.draw= function(){
        console.log('drawing'); 
    }`
 );

// let Rect=new Function('length', 'breadth', `entire code`);
// ``-> entire code write under the back tick this key beside 1
 let rect= new Rectangle1(2,3);
 console.log(rect);

//  object vs References
// object-> number,Boolean,string,NULL,undefine
// References-> Array, function , object

//object
let a=10;
let b=a;
a++;
console.log(a) //11
console.log(b) //10

// References
let x={value:10}
let y=x;

x.value++;
// both equal beacuse it pass by refences
console.log(x.value) //11
console.log(y.value) //11

// NOTE: 
// Premitives are copied by thier values
// References are copied by their address/refences

// premitive
let m=123;

increase(m);
console.log(m);
function increase(a){
    a++;
}

// References
let s={value:11}
incre(s);
function incre(a){
    a.value++;
}
console.log(s.value);


// ITRATING THROUGH OBJEECT
// for-of and for-in loop

let RRectangle={
    length:2,
    breadth:4
};

//for-in loop
for(let key in RRectangle){
    // keys are reflected through key variables
    // values are reflected through rectangle[key]
    console.log(key ,RRectangle[key])
}             

// for-of loop-> use only on iterable ->arrays, maps
for(let key of Object.keys(RRectangle)){
    console.log(key); // length //breadth
}
// for(let key of Object.entries(RRectangle)){
//     console.log(key);
// }
// [ 'length', 2 ]
// [ 'breadth', 4 ]

// check object is present in the fi=unction or not
if('color' in RRectangle){
    console.log('present');
}
else{
    console.log('Absent')
}

// OBJECT CLONING
// iteration || Assign || Spread -> let dest={...src}

// iteration
let src={ a:10,b:20,c:30
}
let dest={};
for(let key in src){
    dest[key]=src[key]
}
// for(let key in dest){
//     console.log(key,dest[key]);
// }
console.log(dest);

// #object 2
// assign
let Src={
    x:100,
    y:200,
    z:300
};
let src2={value:24}

let Dest=Object.assign({},Src, src2);
console.log(Dest)

// # object cloning 
//  Spread -> let dest={...src}
let ssrc={
    m:232,
    n:343,
    s:234
};
let ddest={...ssrc}

console.log(ddest);
ssrc.m++;
console.log(ddest);
console.log(ssrc);

// garbage Collector
// we have no control on garbage collector when stop or start
//  runs in Background



console.log("hello Jee");

let lastName="Kumar"  // primitive string

let firstName=new String('Mohit') //object

let message='This is my first Message';

let word= message.split(' ');

console.log(word); 
message.replace('first','second');
console.log(message);

//tempelate literals
let Message =// `` back tick that will help in give output as shown or as we arrange
`hello ${firstName},
Thanks for the opportunity

Regards
Love Babber`;
console.log(Message);

//DATE AND TIME
let date=new Date();
console.log(date);// Wed Jan 03 2024 13:16:10 GMT+0530 (India Standard Time)

let date2=new Date('february 3  2004 8:16')
console.log(date2); //Tue Feb 03 2004 08:16:00 GMT+0530 (India Standard Time)

let date3=new Date(2004,1,25,8);
console.log(date3);//Wed Feb 25 2004 08:00:00 GMT+0530 (India Standard T

date3.setFullYear(1947)
console.log(date3);//Tue Feb 25 1947 08:00:00 GMT+0530 (India Standard Time)
