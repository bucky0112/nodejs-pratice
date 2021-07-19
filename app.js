const fs = require('fs')

const readText = fs.readFileSync('./text/about_nodejs.txt', 'utf-8')

console.log(readText)

const textOut = `以下是關於 node.js：${readText}\nmade by Bucky Chu, created on ${Date.now()}`

fs.writeFileSync('./text/output.txt', textOut)

console.log('File written')