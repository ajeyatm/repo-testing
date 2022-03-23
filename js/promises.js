//success=> fulfilled
//failed=> rejected
//pending => pending
//over => settled

//we ready file programatically / size 10Mb, 50mb
//identify the file location and name
//10ms 1sc get/read the content
//disply content

const iTryToGenerateEvenNumber = () =>
  new Promise((resolve, reject) => {
    let randomNumber = Math.round(Math.random() * 10)
    let isEven = randomNumber % 2 === 0
    if (isEven) resolve(randomNumber)
    else reject('Sorry,i could not generate even number this time')
  })

// iTryToGenerateEvenNumber()
//   .then((ans) => console.log(ans))
//   .catch((err) => console.error(err))
;(async () => {
  try {
    const res = await iTryToGenerateEvenNumber()
    console.log(res)
  } catch (error) {
    console.log(error)
  }
})()
