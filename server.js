const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
 
const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost'
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
 
      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})

// var https = require('https');
// var fs = require('fs');

// const next = require('next')
// const port = 3000;
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev, dir: __dirname })
// const handle = app.getRequestHandler()


// var options = {
//     key: fs.readFileSync('ssl.key'),
//     cert: fs.readFileSync('ssl.crt'),
//     ca: [fs.readFileSync('root.crt')]
// };

// app.prepare().then(() => {
//     https.createServer(options, (req, res) => {
//         // handle ....
//     }).listen(port, err => {
//         if (err) throw err
//         console.log(`> Ready on localhost:${port}`)
//     })
// })