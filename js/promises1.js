const iTryToGenerateEvenNumber = () => {
  const randonNumber = Math.round(Math.random() * 10)
  const isEven = randonNumber % 2 === 0

  return new Promise((resolve, reject) => {
    if (isEven) resolve('i could able to generate even number')
    else reject("I couldn't be able to generate even number this time")
  })
}

iTryToGenerateEvenNumber()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
