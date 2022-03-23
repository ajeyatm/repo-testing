//10, 9, 8,.....1
//1,2,3..10
// for (let i = 1; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000 * i)
// }

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// arr.forEach((value, index) => {
//   setTimeout(() => {
//     console.log(value)
//   }, 1000 * index)
// })
//cleaTimeout

let i = 0
let idOfSetInterval = setInterval(() => {
  console.log(arr[i])
  i++
  if (i === 10) {
    clearInterval(idOfSetInterval)
  }
}, 1000)
