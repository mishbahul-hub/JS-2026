// singleton
// object.create

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name : "Mishbahul",
    "full name" : "Mishbahul Al Islam",
    [mySym] : "mykey1",
    age : 20,
    location : "Guwahati",
    email : "mishbahul@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Thrusday"]
}

// Symbol() creates a unique value

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@amazon.com"
// console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greeting1 = function(){
    console.log(`Hello JS User, ${this["full name"]}`)
}
// this -> used to access all elements in an object

console.log(JsUser.greeting());
console.log(JsUser.greeting1());