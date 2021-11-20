const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('WElcome!')
    }
    if(res.url === '/about'){
        res.end('Welcome! Our short history')
    }
    else{
        res.end(`
            <h1> OOps1</h1>
            <p> We cannnot seem to fine page</p>
            <a href="/">Back home </a>
    `)
    }
    // res.write('Hello World! The home page');
    
    
    
    // res.end();
});

server.listen(5000);