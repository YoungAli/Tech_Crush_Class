//let item1 = 'milk'
//let item2 = 'milo'
//let item3 = 'rice'

//foreach items in the list, for each is a function
//let items =['milk', 'milo','Tea','sugar']
//let names = ['esther', 'john']

//names.forEach(function(name){
  //  console.log('Tech_crush2026'+ name)
//})

// map method

//let score = [90, 80, 70, 60, 50]

//let newscore = score.map(score=> score+5)// an arrow function
//{
 //   return x+5
//}
//console.log(newscore)
//let students =['Prince', 'joy']
//let nametag = students.map(function(name){
  //  return"Tech_crush2026"+name
//})
//console.log(nametag)

// filter method

let jambScore = [ 200, 250, 300, 180, 100]
let pass = jambScore.filter((score)=>{
    return score>=200
})
console.log(pass)