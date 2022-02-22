//concat two strings
var firstName = 'ajeya'
var lastName = 'kumar'
var welcomeMsg = 'Welcome ' + firstName + ' ' + lastName
console.log('check====', welcomeMsg.endsWith(lastName))

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
var name = ' aman  '
console.log(name.trim())
