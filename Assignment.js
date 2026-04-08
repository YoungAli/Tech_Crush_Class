const str = "Nigeria is awesome";
// Extracting "Nigeria" using substring()
const My_country = str.substring(0, 7);
console.log(My_country); // "Nigeria"
// Extract "awesome" using slice(), slice() can use negative indexes
const awesome_county = str.slice(-7);
console.log(awesome_county); // "awesome"
// Geting "is" using slice()
const getting_is = str.slice(8, 10);
console.log(getting_is); // "is"
const names = "Prince,Emmanuel,Ali";
// Split into array
const arr = names.split(",");
console.log(arr); // ["John", "Jane", "Doe"]
// Join with space
const joined = arr.join(" ");
console.log(joined); // "John Jane Doe"
const path = "/user/home/docs";
// Split by "/"
const parts = path.split("/");
console.log(parts); // ["", "user", "home", "docs"]
// Get "home"
const home = parts[2];
console.log(home); // "home"
//
const email = "princeemmanuelali@gmail.com";
// Get username
const username = email.split("@")[0];
console.log(username); // "user"
// Check if .com domain
const isCom = email.endsWith(".com");
console.log(isCom); // true
// Replace @ with AT
const newEmail = email.replace("@", "AT");
console.log(newEmail); // "userATexample.com"






