// let a = 10
// const b = 20
// var c = 30
var c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
}
// Reason not to use var

// **** scope in code and console(browser) both has different intution

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // can't access varible from function two
    two()
}
// one()

// ---> child function can access parent variable

if(true){
    const username = "hitesh"
    if( username == "hitesh"){
        const website = "youtube"
        console.log(username + " "+ website)
    }
    // console.log(website)
}
// console.log(username)