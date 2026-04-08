const numbers = [2, 4, 6, 8, 10];

// Use forEach to print each number multiplied by 2
numbers.forEach(function(num) {
    console.log(num * 2);
});

// Arrow function version 
numbers.forEach(num => console.log(num * 2));

const names = ["Gift", "Comfort", "Joy", "Mike"];

// Use forEach to print greeting messages
names.forEach(function(name) {
    console.log(`Hello ${name}!`);
});

// Arrow function version
names.forEach(name => console.log(`Hello ${name}!`));

const numbers2 = [1, 2, 3, 4, 5];
// Use map to create new array with squared numbers
const squaredNumbers = numbers2.map(function(num) {
    return num * num;
});
// Arrow function version
const squaredNumbersArrow = numbers2.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
const prices = [100, 200, 300];
// Use map to apply 10% discount to each price
// 10% discount means paying 90% of original price
const discountedPrices = prices.map(function(price) {
    return price * 0.9; // or price - (price * 0.1)
});
// Arrow function version
const discountedPricesArrow = prices.map(price => price * 0.9);
console.log(discountedPrices); // [90, 180, 270]
const numbers1 = [5, 12, 8, 20, 3];
// Use filter to get numbers greater than 10
const numbersGreaterThanTen = numbers1.filter(function(num) {
    return num > 10;
});
// Arrow function version
const numbersGreaterThanTenArrow = numbers1.filter(num => num > 10);
console.log(numbersGreaterThanTen); // [12, 20]
const ages = [15, 22, 17, 30, 18];
// Use filter to get ages 18 and above
const adults = ages.filter(function(age) {
    return age >= 18;
});
// Arrow function version
const adultsArrow = ages.filter(age => age >= 18);

console.log(adults); // [22, 30, 18]

const numbers3 = [10, 15, 20, 25, 30];

// Chain filter and map: first filter numbers > 20, then double them
const result = numbers3
    .filter(function(num) {
        return num > 20;  // Keeps 25 and 30
    })
    .map(function(num) {
        return num * 2;   // Doubles: 25→50, 30→60
    });

// Arrow function version (cleaner)
const resultArrow = numbers
    .filter(num => num > 20)
    .map(num => num * 2);

console.log(result); // [50, 60]