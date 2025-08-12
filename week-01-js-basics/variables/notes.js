//let & const - block scoped
//var         - function scoped (generally avoided in modern JS)

//Js is a dynamically typed language which means that you don't need to declare variable's type

let a = 3                           //number
let name = 'Robert'                 //string
let x = true                //boolean
let u                               //undefined
let n = null                    //null
let o = { key: "value" }    //object

console.log(typeof a);
console.log(typeof name);
console.log(typeof x);
console.log(typeof u);
console.log(typeof n); //'object' - is a historical bug. Null is considered an object
console.log(typeof o);
