//concat two strings
var firstName = 'ajeya'
var lastName = 'kumar'
var welcomeMsg = 'Welcome ' + firstName + ' ' + lastName
// console.log('check====', welcomeMsg.endsWith(lastName))

//check/search whether a word is present in a sentence.
var longString =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolores.'

var wordToBeChecked = 'amet'

// console.log(longString.includes(wordToBeChecked))

//replace all the spaces
var formmatedValue = longString.replaceAll(' ', '')
// console.log(formmatedValue)

//compare two strings
var str1 = 'mnO' // ==> mno
str2 = 'mNo' //==> mno
// console.log(str1.toLowerCase() == str2.toLowerCase())

//
// var name = ' aman  '
// console.log(name.trim())

let name = 'ajeya'
let age = 27
let place = 'Karnataka'

// "hi 'Ajeya' "

let wellcomemsg =
  'Hi ' +
  name +
  '!! \n Good Afternoor. \n Your age is ' +
  age * 100 +
  '. You are from ' +
  place

// console.log(wellcomemsg)

let backtickstring = `Hi ${name}!! \n Good Afternoon. \n Your age is ${
  age * 100
}. You are from ${place}`

// console.log("hi 'Ajeya' ")

let sentence =
  'Hi ajeya!! Good Afternoon. Your age is 2700 . You are from Karnataka'

let email = 'ajeyagmaildsda'
let email2 = 'denaa@outlokk.in' //@yahoo.com

//regular expressions
console.log(sentence.match(/ \d+ /))
console.log(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)
)
