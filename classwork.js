const number = [1, 2, 3, 4, 5];

const doubled = number.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

const scores = [250, 300, 350, 200, 400, 180, 160];

const highScores = scores.filter(score => score >= 300);

console.log(highScores); // [300, 350, 400]

const sum = [2000, 3000, 400, 100, 600];

const total = sum.reduce((acc, curr) => acc + curr, 0);

console.log(total); // 6100

const color = ['blue', 'yellow', 'red'];

const upperColors = color.map(c => c.toUpperCase());

console.log(upperColors); // ['BLUE', 'YELLOW', 'RED']