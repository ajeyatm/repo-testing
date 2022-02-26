//list of items
var numberArray = [1, 2, 3, 5] //array of numbers
let stringArray = ['aa', 'bah', 'jsshs'] //array of strings
let multiTypeArray = [1, 'hh', 'hh676', null, undefined, true] //6-items==> idex ==>0-5

const Pi = 3.142

// console.log(numberArray[0] + numberArray[1] + numberArray[2] + numberArray[3])
// console.log(numberArray.length)

//let , const

//for ==> (intial value; check condition; increment/decrement ) i<=3  => i<4
let sum = 0
for (let i = 0; i < numberArray.length; i++) {
	console.log('value of i is-', i)
	console.log('value of numberArray[i]', numberArray[i])
	console.log('sum=', sum)

	sum += numberArray[i] // sum = sum + numberArray[i]

	console.log('sum=after', sum)

	console.log('value of i at the end-', i)
}
console.log('final sum--', sum)
// console.log('result==', stringArray.join('*'))
// console.log('aa*bah*jsshs'.split('@'))

//can't redeclare a variable
let a = 'apple'
a = 'apple'
// console.log(a)

let variable1 = 23 //number
let variable2 = '23' //string
// console.log(variable1 === variable2)

let newArr = ['one', 'two', 'three']
let newStr = 'djdjd' // string ==> array of characters

console.log('=================================================')
for (let item of newStr) {
	console.log('item==>', item)
}
console.log('***************************************')
for (let i in newStr) {
	console.log('i==>', i)
	console.log(newStr[i])
}
console.log('***************************************')

// newArr.forEach((item) => console.log(item))
// console.log(newArr.filter((item) => item !== 'two'))

let newFilteredArray = []
for (let item of newArr) {
	if (item !== 'two') {
		newFilteredArray.push(item)
	}
}

console.log('newFilteredArray--', newFilteredArray)

console.log('++++++++++++++++++++')
let ageOfArun = 17
let ageOfAshok = 17

console.log('ageOfArun >= 18==', ageOfArun >= 18)

console.log('ageOfAshok >= 18==', ageOfAshok >= 18)

if (ageOfAshok > 18) {
	console.log('He can vote')
} else if (ageOfAshok === 18) {
	console.log('Not Sure')
} else {
	console.log("He can't vote")
}
