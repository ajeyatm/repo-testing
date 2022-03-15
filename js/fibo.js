var fibo = [0, 1] //0,1, fibo[1], fib[0]
function generateFibonacci(n) {
  for (var i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
  }
  return fibo
}

// var fibo = [0, 1] //0,1, fibo[1], fib[0]

function generateFibonacci1(n) {
  let length = fibo.length
  if (length < n) {
    // let lastValue = fibo[length - 1]
    // let lastButOneValue = fibo[length - 2]
    // let newFiboValue = lastValue + lastButOneValue
    // fibo.push(newFiboValue)
    fibo.push(fibo[length - 1] + fibo[length - 2])
    generateFibonacci1(n)
  }
  return fibo
}

// function generateFibonacciSequence(n) {
//   let initVal = [0, 1]
//   let numberOfElements = n
//   if (n < 0) {
//     return 'Invalid input'
//   }
//   if (n === 0) {
//     return initVal[0]
//   }
//   if (n === 1) {
//     return initVal[1]
//   }
//   if (n === 2) {
//     return initVal
//   }
//   let length = initVal.length
//   if (length <= n) {
//     let newFibo = initVal[length - 1] + initVal[length - 2]
//     initVal.push(newFibo)
//     numberOfElements = numberOfElements - 1
//     return generateFibonacciSequence(numberOfElements)
//   } else {
//     return initVal
//   }
// }

console.log(generateFibonacci(5))
