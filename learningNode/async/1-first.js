const http = require('https')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home Page')
    }if(res.url === '/about'){
        // BLOCKING CODE!!!!
        for (let i = 0; i < 1000; i++) {
           for (let j = 0; j < 1000; j++) {
            console.log(`${i} ${j} `);
           }
        }
        res.end('About Page')
    }
    res.end('Error!!')
})

server.listen(8000, ()=>{
    console.log('Server listening on port 5000...')
})