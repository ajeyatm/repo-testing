let arrayOfNumber = [100, 200, 400] //item, element ==> items number type
//index--> indicates position of items in an array/string
// 100 --> 0
// 200 --> 1
// 400 --> 2

let arrayOfAnimals = ['tiger', 'lion', 'monkey'] //=>=items string type

let arryOfMultipleTypes = ['mobile', 100, true, false, Symbol('hi')]

// ; => end of line or statement

let person1 = {
  //key:value
  //key , property, attribute
  name: 'aman', //key-value pair
  age: 34,
  isHeTall: false, // 'yes'--> true , 'no' --> false
  writeASong: () => 'dhdhdjd sdjdjd djjkdd',
  eat: () => {},
  heCanAddtwoNumbers: function (a, b) {
    return a + b
  },
}
//fat-arrow
// console.log(person1.name)

// console.log(person1.writeASong())

let peopleArray = [
  {
    //key:value
    //key , property, attribute
    name: 'aman', //key-value pair
    age: 34,
    isHeTall: false, // 'yes'--> true , 'no' --> false
  },
  {
    //key:value
    //key , property, attribute
    name: 'shashi', //key-value pair
    age: 16,
    isHeTall: true, // 'yes'/'correct'--> true , 'no' --> false
  },
]

/**
 * arr {
 * length : number of items in an array,
 * push: function (valueToBeAdded){
 * }
 * }
 */

// console.log('i am here--', arryOfMultipleTypes.push('hello'))
// console.log(arryOfMultipleTypes.pop())
// console.log(arryOfMultipleTypes.concat(arrayOfAnimals))

let res = []
for (let i = 97; i <= 105; i++) {
  res.push(i)
}

//recursion
function generateNumbers(initialVal, finalVal) {
  // res.push(initialVal)
  if (initialVal >= finalVal) return
  generateNumbers(initialVal + 1, finalVal)
}

generateNumbers(97, 105)

let arrayFromFillAndMap = Array(5)
  .fill()
  .map((ele, index) => {
    return 97 + index
  })
// console.log(arrayFromFillAndMap)

arr = [1, 2, 3]
// for (let i of arr) {
//   console.log(i)
// }

arr.forEach((item, index, arrayItSelf) => {
  // console.log(item, index, arrayItSelf)
})

let result = arr.map((item) => item * 100)

// console.log(result)

let valueTwo = arr.find((item, index, arrayItSelf) => {
  return item === 3
})

let findIndexOfItem = arr.findIndex((item, index, arrayItSelf) => {
  return item === 3
})

let filterOutOddNumbers = arr.filter((item, index, arrayItSelf) => {
  return item % 2 === 0
})
// console.log(findIndexOfItem)
//97 98

arr2 = [19, 3, 01, 15]
// console.log(
//   arr2.sort((a, b) => {
//     return a > b ? -1 : 1
//   })
// )
let emptyArr = []
for (let i = arr2.length - 1; i > -1; i--) {
  emptyArr.push(arr2[i])
}
// console.log(arr2.reverse())
// console.log(emptyArr)
// if(a>b) return 1
// else return -1

let arr3 = [1, 2, 3]

console.log(arr3.reduce((a, b) => a + b))

console.log(
  arr3.reduce((acc, curr, index) => {
    acc[index] = curr * 100
    return acc
  }, [])
)

console.log(
  arr3.reduce((acc, curr, index, arrayItself) => {
    acc[curr] = curr
    return acc
  }, {})
)
