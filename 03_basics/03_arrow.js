const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
user.username = "mass"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
//     // this cannot be accessed inside function
// }


const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

// const add2 = (num1, num2) => {
//     return num1 + num2
// }

// const add2 = (num1, num2) =>  num1 + num2
// const add2 = (num1, num2) =>  (num1 + num2)

const add2 = (num1, num2) =>  ({username : "hitesh"})
// arrow funciton : () => () or () => {}
console.log(add2(3,7))