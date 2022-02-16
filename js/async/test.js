const delay = s =>
  new Promise(res =>
    setTimeout(() => {
      console.log(`Set for s=${s}`)
      res()
    }, s * 1000)
  )

async function a() {
  console.log('1')
  await delay(1)
  console.log('2')
  await delay(2)
  console.log('3')
  delay(3)
  console.log('4')
}

a()
