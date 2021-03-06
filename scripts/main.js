// (function(){
//     'use strict';


// Show me how to calculate the average price of all items. Please `console.log` the average.


const itemPrices = items.map(function (item) {
    return item.price
}).reduce(function (acc, i) {
    return acc + 1;
})

const averagePrice = (itemPrices / items.length).toFixed(2)
console.log(`the average price is $${averagePrice}.`)

//Reduce without map
// const priceofAllItems = items.reduce(function(acc, i){
//     return acc + i.price
// }, 0)


// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please `console.log` the answer.

const priceRange = items.filter(function (item) {
    if (item.price >= 14 && item.price <= 18 && item.currency_code === 'USD') {
        return item;
    }
})
console.log(`items that cost between 14.00 USD and 18.00 USD`)

console.log(priceRange)

// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please `console.log` the one you find.

const GBP = items.filter(function (item) {
    if (item.currency_code === 'GBP') {
        console.log(`${item.title} costs ${item.price}`)
    }
})



// 4. Show me how to find which items are made of wood. Please `console.log` the ones you find.

// filter materials

const wood = items.filter(function (item) {
    if (item.materials.includes('wood')) {
        console.log(`${item.title} is made of wood`)
    }
})




// 5. Show me how to find which items are made of eight or more materials. Please `console.log` the ones you find.
const manyMaterials = items.filter(function (item) {
    if (item.materials.length >= 8)
        console.log(`${item.title}`)
        // item.materials.forEach(function(material){
        //     console.log(material)
        // })
})




// 6. Show me how to calculate how many items were made by their sellers. Please `console.log` your answer.
const sellers = items.filter(function (item) {
    return item.who_made.includes('i_did');
})

console.log(`${sellers.length} were made by their sellers`)

// use forEach and returns instead of if/else with console.log

// })