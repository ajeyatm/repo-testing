let setOfNumbers = new Set()
let numberArray = new Array() // []
numberArray.push(5)
numberArray.push(6)
numberArray.push(7)
numberArray.push(7)
numberArray.push(7)
console.log(numberArray.length)

setOfNumbers.add(5)
setOfNumbers.add(6)
setOfNumbers.add(7)
setOfNumbers.add(7)
setOfNumbers.add(7)
console.log(setOfNumbers.size)

console.log(numberArray.includes(5))
setOfNumbers.clear()
console.log(numberArray)
