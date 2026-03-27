const my_object = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for object for-in loop works fine 
// but for-of loop , an object is not iterable

for(const key in my_object){
    // console.log(key, my_object[key])
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}
// also works fine for array

const map = new Map()
map.set('IN', "India")
map.set('INDO', "Indonesia")
map.set('EN', "England")
map.set('JPY', "Japan")

for(const key in map){
    console.log(key);
} // no output because map is not iterable