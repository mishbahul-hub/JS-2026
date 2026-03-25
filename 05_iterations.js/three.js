const arr = [1, 2, 3, 4, 5]

// {for of } ---> acts like auto for loop
for (const num of arr){
    // console.log(num)
}

const text = "hello future me"
for(const char of text){
    // console.log(`each char is ${char}`)
    if(char == " "){
        break
    }
    // console.log(char)
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('INDO', "Indonesia")
map.set('EN', "England")
map.set('JPY', "Japan")

// console.log(map)

for (const [key, value] of map){
    // console.log(key, '->', value)
}

const obj = {
    name1 : "mishbahul",
    name2 : "nargish"
}

// for (const [key, value] of obj){
//     console.log(key, value)
// }