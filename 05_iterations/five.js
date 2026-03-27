const programming = ["js", "rb", "py", "java", "cpp"]

// for each loop

// programming.forEach( function (item) {
//     console.log(item)
// })

programming.forEach( (item) => {
    // console.log(item);
})

function printme(item, index, arr){
    // console.log(item, index, arr)
}
programming.forEach(printme)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
// array of object : used in databases

myCoding.forEach( (item) => {
    console.log(`${item.languageName} -> ${item.languageFileName}`)
})