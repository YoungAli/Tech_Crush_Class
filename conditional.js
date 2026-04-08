/*const Test = "Prince"
var Test1 = "Welcome"
let Test2 = "Thank you"
console.log(Test)
var Test1 
let str = "String"
str[0] = "Hi"
console.log(str);

// creating an object in js
 let my_object ={ 
    name: "Prince",
    aga: "26"
 };

let My_array = [20, 25, 28]
console.log(My_array.lastIndexOf(25))

// creating a function

function greet(name) {
  console.log("Hello " + name);
}

greet("John"); // Hello John

function test(welcome){
    console.log('Prince Ali')
}
test()

const prince = '20'

if (prince>=10){
    console.log('not good enough')
}else{
    console.log('You are not welcome')
}
let arrayOfNames = ['Esther', 'Adiana', 'John']
for (let names = 0; names < arrayOfNames.length;
    names++
){
console.log(arrayOfNames[names])
}

for (let greetings=0; greetings <3; greetings++){
    console.log("Hello Word")
}

for (let x=2; x<=26; x *=2){
    console.log(x)
}

let stringtext = "This is a class on string"
console.log(stringtext.length)
let capital_letter = stringtext.toUpperCase()
let capital2_letter = stringtext.toLocaleLowerCase()

console.log(capital2_letter)
console.log(capital_letter)

let str = '  Hello '
let trimmedstr = str.trim()
let trimmedstrend = str.trimEnd()
let trimmedstrstart = str.trimStart()

console.log(trimmedstr)
console.log(trimmedstrend)
console.log(trimmedstrstart)


// index of, the return type for index of is a number
// return datatype is number
let user_email = "ogbuuzoma413@gmail.com"
let email_index = user_email.indexOf('413')
console.log(email_index)

// include will return true or false which is a boolean
// and return datatype is boolean

let email_contain = user_email.includes('@')
console.log(email_contain)

//
let user_name = "The Prince Solutions Hub"
let start = user_name.startsWith('The Prince Solutions Hub')
console.log(start)

let ends = user_name.endsWith('The Prince Solutions Hub')
console.log(e)

// if statement in js
let score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("C");
}
//local variable
if (true){
    let message = 'Local Variable'
    console.log(message)
}

// Slice and substring

let test2 = 'My name is prince'
let slice = test2.slice(-6)
let substring = test2.substring(0,10)
console.log(test2)
console.log(substring)


//replace and replace all

const text = 'Prince is a great programmer and the first language Prince learned is python'
const replacetext = text.replace('Prince', 'Faith')
const replacetextAll = text.replaceAll('Prince', 'Faith')
console.log(replacetext)
console.log(replacetextAll)

// class work

let msg = "  Hello, WORLD!  ";
// 1. Remove extra spaces
let trimmed = msg.trim();
// 2. Check if it starts with "Hello"
let startsWithHello = trimmed.startsWith("Hello");
// 3. Check if it ends with "WORLD!"
let endsWithWorld = trimmed.endsWith("WORLD!");
// 4. Convert to lowercase
let lower = trimmed.toLowerCase();
// 5. Find position of "WORLD"
let position = trimmed.indexOf("WORLD");
// 6. Replace "WORLD" with "Nigeria"
let replaced = trimmed.replace("WORLD", "Nigeria");
// 7. Replace all "L" with "1"
let replacedAllL = trimmed.replace('L', "1");
// 8. Get characters from position 3 to 8
let substring = trimmed.substring(3, 8);
// Output results
console.log("Trimmed:", trimmed);
console.log("Starts with Hello:", startsWithHello);
console.log("Ends with WORLD!:", endsWithWorld);
console.log("Lowercase:", lower);
console.log("Position of WORLD:", position);
console.log("Replace WORLD:", replaced);
console.log("Replace all L:", replacedAllL);
console.log("Substring (3 to 8):", substring);*/


// split, it takes a string

var sentence = 'LANGUAGE: javascript, python, java, c#'
let splitsentence= sentence.split('P')
console.log(splitsentence)