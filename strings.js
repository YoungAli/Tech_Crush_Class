// length of a string

//let stringlenght = 'this is a class to check legnth of a string'
//console.log(stringlenght.length)


//toUpperCase and toLowerCase, it must both be case sensetive
/*var capital_letter = 'this is a small letter that will be converted to capital letter';
var small_text = 'THIS IS HOW WE GET BETTER AT PROGRAMMING, this is a capital letter that will be converted to small letter';

var upper = capital_letter.toUpperCase();
var lower = small_text.toLowerCase();

console.log(upper);
console.log(lower);*/

/*
// the trim method removes extral spaces from the beginning to the end
const text = '      Hello word   '
console.log(text.trim())

// the trim start only remove spaces from the beggining of the text
let the_trimstart = '  we want to see you in action   '
console.log(the_trimstart.trimStart())

// the trimend removes spaces at the end of the string
let the_trimend = ' We want to see how good you will be in this programming       '
console.log(the_trimend.trimEnd())*/


// using the trim start and the trim end
/*
let signup_name = 'Prince    '
let signin_name = 'Prince'

if ((signup_name.trimEnd().toLowerCase) === signin_name){
    console.log('Welcome back, Prince')
}else{
    console.log('Invalid login information')
}

indexof and includes
let user_email = 'princeemmanuelali@gmail.com'
let email_index = user_email.indexOf('@')
console.log(email_index)

let email_contain = user_email.includes('@')
console.log(em)

//startsWith and endsWith
let userName = "techCrush Esther 6"
let starts = userName.startsWith("techCrush") // return datatype : boolean
console.log(starts)

let ends = userName.endsWith("6") // return datatype : boolean
console.log(ends)

// slice and substring
let testString = "my name is Esther! "
let slicedString = testString.slice(0, 10)
let substringString = testString.substring(0, 10)
console.log(slicedString)
console.log(substringString)

//replace and replaceAll
let text = "Prince is a techie. Prince loves coding and Esther loves teaching"
let replacedText = text.replace("Prince", "He") 
let replacedAllText = text.replaceAll("Prince", "He")
console.log(replacedText)
console.log(replacedAllText)

// split method
const sentence = "LANGUAGES: JavaScript, Python, Java, C++"
let splitSentence = sentence.split(" ") // return datatype : array
console.log(splitSentence)
let example = "she is a girl , she is a teacher, she is eating"
console.log(example.split("she"))

let sentence = "JavaScript is very fun";
let split_sentence = sentence.split(' ')
console.log(split_sentence)


let email = "esther123@gmail.com";
let collect_email = email.split('@gmail.com')
console.log(collect_email)


function check_password(password){
    if (password.length >=8){
        return 'strong password';

    }else{
        return 'weak password'
    }
}
console.log(check_password('12345#@adFG'))

function isAdult(age){
    return age >= 18
}
console.log(isAdult(20))
console.log(isAdult(16))
console.log(isAdult(18))*/

let fruits = ["apple", "banana", "orange", "grape", "mango"];
let names = ["esther", "john", "doe", "jane", "smith"];

names.forEach(function (name) {
  console.log("TECH_CRUSH_2026_COHORT_6 " + name); //named function
});
names.forEach((name) => {
  console.log("TECH_CRUSH_2026_COHORT_6 " + name); //arrow function
});