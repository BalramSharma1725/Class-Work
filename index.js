const http = require('http');

var port= 3000;

const server = http.createServer((req , res)=>{
    //res.write("Hello i am here!!");
    //res.statusCode=200;
    res.writeHead(200, 'content-type','text/html');
    res.end(`<h1>hello world is here</h1>`);
});

server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});

