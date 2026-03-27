const nums = [4, 5, 8]

const mytotal = nums.reduce(function (acc, curr) {
    console.log(`acc : ${acc} and current : ${curr}`)
    return acc - curr
},0)

// const total = nums.reduce( (acc, curr) => acc+curr,0)
// console.log(mytotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total_price = shoppingCart.reduce((acc, item) => {
    return acc + item.price
},0)
console.log(total_price)

// reduce has 2 functions : accumulaor and currentValue