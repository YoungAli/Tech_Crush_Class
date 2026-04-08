/*
// for each method using name function
let fruits = ['apple', 'banana', 'orange', 'grape'];
let names = ['Prince', 'chisom', 'joy']

names.forEach(function(names){
    console.log('Techcrus 2026 ' +  names)
})
// for each method using arrow function

names.forEach((names)=>{
    console.log('i will be one of the greatest in techcrush ' + names)

})

// map method, is used to change each item and return a new array

let scores = [90, 80, 70, 60]
let newscore = scores.map((X) =>{
    console.log('as a good teacher')
    return X + 5;
})
console.log(newscore)

const number = [1, 2, 3, 4]
const result = number.map(num =>  num *2)
console.log(result)

// filter method, for the code below, it will only return the one above 200

let jambscore = [ 200, 250, 300, 150, 280, 290]

let passed = jambscore.filter((score) =>{
    return score>=200;
})
console.log(passed)

*/

const number = [ 1, 2, 3, 4, 2, 2,5]
const result = number.filter((num => num>2))
console.log(result)


