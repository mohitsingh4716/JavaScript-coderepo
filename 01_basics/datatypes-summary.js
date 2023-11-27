//#Primitive
//7 types { string, Number Booleans , null, undefined, symbol BigInt}

const score= 100
const scorevalue= 100.3

const isLoggedIn= false
const outsideTemp = null
let userEmail ; //{undefined}

//console.log(userEmail);

const id= Symbol('123')
const newId= Symbol('123')

//console.log(id==newId);
//console.log(newId);

const BigInt= 4366746343846233;
// console.log(BigInt)

//#Referece (non- preemitive)
 // Array, Object , functions
const heros=["mohit", "Bhanu", "Rishabh", "somiya"]
// let myobject {
//     name: "Mohit"
//     age: 22;
// }

const myfunction= function(){
    console.log("Hello MOhit")
}
// myfunction()


//++++++++++++++++++++++++++++++++++++++++++++++++++++++


//# Stack(primitive) and Heap(non-primitive) Memory

//stack
let myYouTubename="mohitkumarsinghdotcom"

let anothername= myYouTubename
anothername="mohitsingh"

// console.log(myYouTubename)  //mohitkumarsinghdotcom
// console.log(anothername)    //mohitsingh    


//Heap

let userone = {
    email: "user@google.com",
    upi: "user@ybl"

}
let userTwo= userone
userTwo.email="mohitsingh@google.com"

console.log(userone.email)  // mohitsingh@google.com
console.log(userTwo.email)  // same
