// dates

let date1 = new Date()
// console.log(date.toString())
//Thu Mar 19 2026 23:42:51 GMT+0530
// console.log(date.toDateString())
//Thu Mar 19 2026

// let my_date = new Date(2026, 2, 19)
// let my_date = new Date("2025-03-19")
let my_date = new Date("19-04-2005")
// console.log(my_date.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)

let new_date = new Date()
// console.log(new_date);
// console.log(new_date.getMonth()+1); // month starts from zero so "+1"
// console.log(new_date.getDay());

let time = new_date.toDateString()
let date = new_date.getUTCDate()
console.log(`Today is date:${date} and currently the time is ${time}`)