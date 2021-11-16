const http = require('http');

const server = http.createServer();
server.on('request', (req,res)=>{
    req.end('Welcome')
})
server.listen(5000);