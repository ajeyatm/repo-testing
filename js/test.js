let a = 16
function squareRootOfANumber() {
  let ans = Math.sqrt(a) //==>4
  return ans
}

//functions or methods of Math have return value
let sqRoot = squareRootOfANumber()

let sqrtOfANumber = function () {
  return Math.sqrt(a)
}

let sqrtOfANumberWithArrow = () => Math.sqrt(a)
let sqrtOfANumberWithArrow1 = () => {
  //operation1
  return Math.sqrt(a)
}

console.log(sqrtOfANumberWithArrow())
