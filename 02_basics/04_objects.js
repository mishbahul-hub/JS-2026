// const tinder_user = new Object() // singleton
const tinder_user = {}

tinder_user.id = "01234"
tinder_user.name = "Nargish"
tinder_user.isLoggedIn = false

// console.log(tinder_user)

const regular_user = {
    email : "myname@gmail.com",
    fullname : {
        userfullname : {
            firstname : "mishbahul",
            middlename : "Al",
            lastname : "Islam"
        }
    }
}

// console.log(regular_user.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} // creates object inside an object
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
const obj3 = {...obj1, ...obj2, ...obj4}
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj3)

// Array of objects that are used in Databases
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email

console.log(tinder_user)
console.log(Object.keys(tinder_user))
console.log(Object.values(tinder_user))
console.log(Object.entries(tinder_user))
console.log(tinder_user.hasOwnProperty('isLoggedIn'));