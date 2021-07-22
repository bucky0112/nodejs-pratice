const http = require('http')
const url = require('url')
const fs = require('fs')

// make serve
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
  const pathName = req.url
  // console.log(req.url)
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is overview')
  } else if (pathName === '/product') {
    res.end('This is product')
  } else if (pathName === '/api') {
    /* fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
      const productData = JSON.parse(data)
      console.log(productData)
      res.writeHead(200, {
        'Content-type': 'application/json'
      })
      res.end(data)
    }) */
    res.writeHead(200, {
      'Content-type': 'application/json'
    })
    res.end(data)
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    })
    res.end('<h1>404</h1>')
  }
})

server.listen(8080, '127.0.0.1', () => {
  console.log('Requests on port 8080')
})
