
// Creating an object
let student = {
    name: "Ngozi Adeyemi",
    age: 21,
    department: "Computer Science",
    isEnrolled: true
};

// Accessing values
console.log(student.name);       // "Ngozi Adeyemi"
console.log(student["age"]);     // 21

const user ={
    name:  'esther',
    password: '12345',
    isFemale: true,
    city: 'Lagos',
    age: 25
}// for in loop
for ( let key in user){
    console.log('these are the keys '+ key)
    console.log('these are the keys:  '+  user [key])
    
}
console.log(Object.keys(user))// this is a method
console.log(Object.values(user))
console.log(Object.entries(user))