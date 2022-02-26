let object1 = {
	key1: 113, //
	key2: 456,
}

let person = {
	name: 'arun',
	age: 24,
	place: 'Benagluru',
	married: false,
} //key-->property or attribute of an object
//person['name'] or person.name
//person.age

let name = 'arun'
let userArray = [
	{
		name: 'arun',
		age: 24,
		place: 'Benagluru',
		married: false,
	},
	{
		name: 'ashok',
		age: 29,
		place: 'Benagluru',
		married: true,
	},
]

out = ['arun', 'ashok']

// console.log([userArray[0]['name'], userArray[1].name])
let userNames = []

for (let i = 0; i < userArray.length; i++) {
	console.log('iteration-', i)
	let name = userArray[i]['name'] //userArray[i].name
	userNames.push(name)
}

console.log('-----------------------------')

console.log('person--', person)
for (let item in person) {
	console.log(item, '-->', person[item])
}
console.log('_____________________________')
let arr2 = []
arr2.push(44)
arr2.push('hello')
arr2.push(true)

console.log(arr2)
