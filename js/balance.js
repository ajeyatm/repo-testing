let transactions = [
  {
    deposite: 6000,
    place: 'ATM Machine',
  },
  {
    deposite: 3000,
    place: 'UPI',
  },
  {
    withdraw: 4500,
    place: 'ATM Machine',
  },
  {
    deposite: 1000,
    place: 'UPI',
  },
  {
    withdraw: 2500,
    place: 'ATM Machine',
  },
  {
    withdraw: 1500,
    place: 'ATM Machine',
  },
]
//initialBal = 0 + 6000  + 3000 - 4500 + 1000 - 2500 - 1500
let bal = 0
transactions.forEach((trans) => {
  //   let deposite = trans.deposite
  //   let withdraw = trans.withdraw

  //   if (deposite !== undefined) {
  //     bal += deposite
  //   }
  //   if (withdraw !== undefined) bal -= withdraw
  if (trans.hasOwnProperty('deposite')) bal += trans.deposite
  if (trans.hasOwnProperty('withdraw')) bal -= trans.withdraw
})

console.log(bal)
