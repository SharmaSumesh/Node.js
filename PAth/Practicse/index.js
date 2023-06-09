// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.end("Hello server is started");
// })
// server.listen(3000,"127.0.0.1",()=>{
//     console.log("start server at 3000")
// })
// const http = require("http");
// const server = http.createServer((req,res)=>{
// if(req.url=="/")
// {
// res.end("HOME PAGE")

// }
// else if(req.url=="/about")
// {
// res.end("About Page")
// }
// else if(req.url=="/ContactUs")
// {
// res.end("contact info")

// }
// else
// {
// res.end("server not found")
// }
// })
// server.listen(4000,"127.0.0.1",()=>{
// console.log("server is start")
// })
const fs = require("fs");
fs.writeFileSync("Data.txt","Hello my name is sumesh");
const b = fs.readFileSync("Data.txt","utf-8");
console.log(b);