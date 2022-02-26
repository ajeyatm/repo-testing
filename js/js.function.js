let arr1 = [3, 5, 7, 8]
let arr2 = [8, 2, 52, 6, 9, 2]
let arr3 = [3, 5, 7, 8]
let arr4 = [8, 2, 52, 6, 9, 2]
let arr5 = [3, 5, 7, 8]
let arr6 = [8, 2, 52, 6, 9, 2]

//functions ==> function keyword , function name, (arguments), curly braces
function addArrayItemsV1(arr, initialValue) {
	let sum = initialValue
	for (let i = 0; i < arr.length; i++) {
		//newvalue= prev value + current value
		sum = sum + arr[i]
	}
	console.log('sum--', sum)
}

let addArrayItemsV2 = function (arr, initialValue) {
	let sum = initialValue
	for (let i = 0; i < arr.length; i++) {
		//newvalue= prev value + current value
		sum = sum + arr[i]
	}
	console.log('sum--', sum)
}

let addArrayItemsV3 = (arr, initialValue) => {
	let sum = initialValue
	for (let i = 0; i < arr.length; i++) {
		//newvalue= prev value + current value
		sum = sum + arr[i]
	}
	console.log('sum--', sum)
}

;((arr, initialValue) => {
	let sum = initialValue
	for (let i = 0; i < arr.length; i++) {
		//newvalue= prev value + current value
		sum = sum + arr[i]
	}
	console.log('sum--', sum)
})(arr1, 200)

//var let const
// addArrayItemsV3(arr1, 200)

//primitive Types - numbers, strings, boolean, undefined, null, symbol
//non-primitive types - array, objects , set
//for loop and its varients
//if-else chain
//functions
