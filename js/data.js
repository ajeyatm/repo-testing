//we will store data in dbs  (excel file)
//information about single entity will be stored in single table / (sheet)
//to fetch data from db , we need backend with the help of APIs

let users = [
  {
    userId: 'u001',
    name: 'Aravind',
    city: 'Pune',
    carsOwned: 1, //['1', '3', '7'],
  },
  {
    userId: 'u002',
    name: 'Kamal',
    city: 'Goa',
    carsOwned: 3, //['2', '8', '3'],
  },
  {
    userId: 'u003',
    name: 'Rani',
    city: 'Kerala',
    carsOwned: 5, //['5'],
  },
  {
    userId: 'u004',
    name: 'Suresh',
    city: 'Karnataka',
    carsOwned: 6, //['4', '6'],
  },
]

let cars = [
  {
    carId: 1,
    carName: 'Audi e-tron',
    type: 'electric',
    priceInLacks: 100,
    imgUrl:
      'https://media.zigcdn.com/media/model/2021/Jul/auti-etron-2_360x240.jpg',
    taxInPercentage: 7,
  },
  {
    carId: 2,
    carName: 'Hyundai Kona Electric',
    type: 'electric',
    priceInLacks: 23.79,
    imgUrl:
      'https://media.zigcdn.com/media/model/2020/Jun/hyundai-kona_360x240.jpg',
    taxInPercentage: 7,
  },
  {
    carId: 3,
    carName: 'Mg ZS EV',
    type: 'electric',
    priceInLacks: 21.49,
    imgUrl:
      'https://media.zigcdn.com/media/model/2020/Jun/mg-zs-ev_360x240.jpg',
    taxInPercentage: 7,
  },
  {
    carId: 4,
    carName: 'Kia Seltos',
    type: 'fuel',
    priceInLacks: 9.95,
    imgUrl:
      'https://media.zigcdn.com/media/model/2021/May/seltos-3_360x240.jpg',
    taxInPercentage: 12,
  },
  {
    carId: 5,
    carName: 'Mahendra XUV700',
    type: 'fuel',
    priceInLacks: 12.95,
    imgUrl:
      'https://media.zigcdn.com/media/model/2021/Oct/xuv700-5_360x240.jpg',
    taxInPercentage: 12,
  },
  {
    carId: 6,
    carName: 'Citroen C5 Aircross',
    type: 'fuel',
    priceInLacks: 32.23,
    imgUrl:
      'https://media.zigcdn.com/media/model/2021/Feb/c5-aircoss-2_360x240.jpg',
    taxInPercentage: 12,
  },
  {
    carId: 7,
    carName: 'Maruti Wagon R',
    type: 'cng',
    priceInLacks: 5.39,
    imgUrl:
      'https://media.zigcdn.com/media/model/2022/Feb/wagonr-5_360x240.jpg',
    taxInPercentage: 10,
  },
  {
    carId: 8,
    carName: 'Tata Tiago',
    type: 'cng',
    priceInLacks: 5.19,
    imgUrl: 'https://media.zigcdn.com/media/model/2021/Apr/tiago-3_360x240.jpg',
    taxInPercentage: 10,
  },
]

// for (let user in users) {
//   let userName = user.name
//   let userCity = user.city
//   let carsOwnedByUser = user.carsOwned

//   console.log(userName, '---------')
//   console.log(carsOwnedByUser)
// }

let userAndCarInfo = []

users.forEach((user) => {
  let carDetails = cars.filter((car) => {
    return car.carId === user.carsOwned
  })

  let newUserCarInfo = {
    name: user.name,
    city: user.city,
    carsOwnedByUser: carDetails,
  }

  userAndCarInfo.push(newUserCarInfo)
})

for (let user of users) {
  let carInfo

  for (let car of cars) {
    if (car.carId === user.carsOwned) {
      carInfo = car
    }
  }

  let newUserCarInfo = {
    name: user.name,
    city: user.city,
    carsOwnedByUser: carInfo,
  }

  userAndCarInfo.push(newUserCarInfo)
}

console.log(userAndCarInfo)

// let arr = [2, 5, 6, 8, 11]
// let result = arr.filter((item) => {
//   return item % 2 === 0
// })

// console.log(result)

// 2 % 2 =0 === 0 ==> true
// 5 % 2 = 1 === 0 ==> false
// 6 % 2 = 0 === 0 ==> true
// 8 % 2 = 0 ==== 0 ==> true
// 11 % 2 = 1 === 0 ==> false
