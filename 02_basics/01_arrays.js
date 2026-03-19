// arrays

const arr = [1, 2, 3, 4, 5]
// ------> it makes a shallow copy
// ------> a copy whose properties share the same reference points
// console.log(arr[0])
const arr2 = ["ant-man", "spider-man"]
// console.log(arr2)

// ****** array methods *******

arr.push(6)
arr.pop()
// console.log(arr)

arr.unshift(9)
arr.shift()
// console.log(arr)

// console.log(arr.includes(6))
// console.log(arr.indexOf(3))

const new_arr = arr.join()
// console.log(typeof arr)
// console.log(typeof new_arr)
// console.log(arr)
// console.log(new_arr)

// ******* slice and splice ********

console.log("A", arr)
const myn1 = arr.slice(1, 3)
console.log(myn1)
console.log("B", arr)

const myn2 = arr.splice(1, 3)
console.log("C", arr)
console.log(myn2)