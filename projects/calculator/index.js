const initilValue = '0'
let finalValue = '0'

// document.addEventListener('DOMContentLoaded', function () {
// 	const btns = document.querySelectorAll('.btn')
// 	btns.forEach((btn) => {
// 		let val = btn.innerText
// 		console.log('val--', val)
// 		btn.addEventListener('click', concatNumbers, false)
// 	})
// })

const screen = document.querySelector('.screen')

function concatNumbers(val) {
	finalValue =
		finalValue === initilValue
			? val + ''
			: finalValue?.split('.00')[0] + val + ''
	screen.innerText = finalValue
}

function total() {
	finalValue = eval(finalValue).toFixed(2)
	screen.innerText = +finalValue + ''
}

function allClear() {
	if (finalValue !== '0') {
		finalValue = initilValue
		screen.innerText = initilValue
	}
}

function clearLastEntry() {
	if (finalValue !== '0') {
		finalValue = (finalValue + '').slice(0, -1)
		screen.innerText = finalValue
	}
	if (finalValue.length == 0) {
		finalValue = initilValue
		screen.innerText = initilValue
	}
}
