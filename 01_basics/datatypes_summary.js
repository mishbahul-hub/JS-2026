// Primitive ( 7 types ) :

// -> String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const score_value = 100.7
const isLoggedIn = false
const outside_temp = null
let user_email;

const id = Symbol('123')
const another_id = Symbol('123')
// console.log(id)
// console.log(another_id)

const big_number = 2635467453n
// Reference (Non Primitive) : 

// -> Array, Objects, Functions


const heros = ["Iron Man", "hulk", "SpiderMan"] // array

let my_object = {
    name : "mishbahl",
    age : "21"
} // this is an object ( key : value pair)

const my_function = function(){
    console.log("hello chicha")
}

// console.log(typeof my_function)

// stack(primitive), heap(non primitive)

let my_youtube = "iodfhioyvfed"
let youtube = my_youtube
youtube = "chaiaurcode" // change is done in the another copy

// console.log(my_youtube)
// console.log(youtube)

let user_1 = {
    email : "abc@gmail.com",
    number : "283648796354"
}
let user_2 = user_1 // this will refer to the same reference(i.e to the original copy)

user_2.email = "hitesh.google.com"
console.log(user_1.email)
console.log(user_2.email)