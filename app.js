const fs = require('fs')

// Blocking, synchronous way
/* const readText = fs.readFileSync('./text/about_nodejs.txt', 'utf-8'
console.log(readText)
const textOut = `以下是關於 node.js：${readText}\nmade by Bucky Chu, created on ${Date.now()}`
fs.writeFileSync('./text/output.txt', textOut)
console.log('File written') */

// Non-Blocking, asynchronous way
fs.readFile('./text/test.txt', 'utf-8', (err, data1) => {
  // if (err) return console.log(err)
  fs.readFile(`./text/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2)
    fs.readFile(`./text/output.txt`, 'utf-8', (err, data3) => {
      console.log(data3)

      fs.writeFile('./text/newOne.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
        console.log('Already written!')
      })
    })
  })
})

console.log('This first')