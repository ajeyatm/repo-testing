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

// ;((arr, initialValue) => {
//   let sum = initialValue
//   for (let i = 0; i < arr.length; i++) {
//     //newvalue= prev value + current value
//     sum = sum + arr[i]
//   }
//   console.log('sum--', sum)
// })(arr1, 200)

//var let const
// let returnValue = addArrayItemsV1(arr1, 100)

//primitive Types - numbers, strings, boolean, undefined, null, symbol
//non-primitive types - array, objects , set
//for loop and its varients
//if-else chain
//functions

//add two numbers
//divide "that answer" by 2
let num1 = 20
let num2 = 10
//return 15

//(num1+num2)/2
let sum = num1 + num2
let avg = sum / 2
console.log('avg--', avg)

function addTwoNumbers(num1, num2) {
  let sum = num1 + num2
  return sum
}

function avgOfTwoValues(num1, num2) {
  // calling one function within another function
  let avg = addTwoNumbers(num1, num2) / 2
  return avg
}

function avgOfTwoValues2(num1, num2, addFunction) {
  // passing a function as an argument/paramter to another function ==> callback function
  console.log('addFunction--', addFunction)
  let avg = addFunction(num1, num2) / 2
  return avg
}

// let resultSum = addTwoNumbers(10, 20)
let resultAvg = avgOfTwoValues2(10, 20, addTwoNumbers)

//function call/invocation
console.log('resultAvg--', resultAvg)
