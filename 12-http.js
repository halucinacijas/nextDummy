const http = require('http')
const url = require('url')


const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Home page")
    }
    if(req.url === '/about'){
        res.end("About page")
    }
    res.end(`
        <h1>whoops ${url.pathname}</h1>
        `)
})

server.listen(5000)