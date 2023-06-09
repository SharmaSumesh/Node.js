// node.js Stream
// Stream are objects that let yoy read data from source or 
// write data to a destination in continue fashion 
// Streaming meaning listing music and watching video in real time 
// instead of downloading a file
// Readable:- stream and read operation 
// Writable:- stream which is used to write operation 
// Dulplex: - stream which can be used for both read and write 
// tranform :- A type of Dulplex stream where the output is computed based on input 
const fs  = require("fs");
// const fs  = require("fs");
// const http = require("http");
// const server = http.createServer();
// server.on("request",(req,res)=>{
//     // fs.readFile("data.txt",(err,data)=>{
//     //     if(err) return console.error("error");
//     //     res.end(data.toString());
//     // });
//     // const rstream = fs.createReadStream("./data.txt");
//     // rstream.on('data',()=>(chukdata)=>{
//     //     res.write(chukdata)
//     // });
//     const stream = fs.createReadStream("data.txt");
//     stream.pipe(res);
  
// });
// server.listen(8000,"127.0.0.1");  
const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request",(req,res)=>{
    const stream = fs.createReadStream("data.txt");
    stream.pipe(res);
})
server.listen(3000,"127.0.0.1");
