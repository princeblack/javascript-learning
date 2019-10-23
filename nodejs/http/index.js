const http = require("http");
const port = 3000;

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Hello World");
    console.log("=============================================");
    
});
server.listen(port,()=>{
    console.log(`The server is up and running at port ${port}`);
    
})