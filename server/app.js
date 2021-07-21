const http = require('http')
const url = require('url')

// make serve
const server = http.createServer((req, res) => {
  const pathName = req.url
  // console.log(req.url)
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is overview')
  } else if (pathName === '/product') {
    res.end('This is product')
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
