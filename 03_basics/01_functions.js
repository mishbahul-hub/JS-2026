function say_my_name(){
    console.log("I")
    console.log("S")
    console.log("L")
    console.log("A")
    console.log("M")
}

// say_my_name()

function add(number1, number2){
    let result = number1 + number2
    return result
}

const result = add(3,5)
// console.log(result)

function login(username = "mishbahul"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in.`
}

// console.log(login("mishbahul"))
// console.log(login("mish"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 500))
// returns an array

const user = {
    username : "mishbahul",
    price : 2398454657689
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

handleObject({
    username : "sam",
    price : 300
})
const array = [200, 4300, 399]

function returnsecondvalue(getArray){
    return getArray[1]
}
// console.log(returnsecondvalue(array))

console.log(returnsecondvalue([200, 9458, 346, 394, 100]))