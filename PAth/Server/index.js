//Server Part
// const http = require("http");
// const server = http.createServer((req,res)=>{
//   res.end("Hello this is your server");
//    
// });
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("server is running on 8000")
// })





// Routing part
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     if(req.url=="/")
//     {
//         res.end("Home Page");

//     }
//     else if(req.url=="/about")
//     {
//         res.end("About Page");
//     }
//     else
//     {
//         res.end("Error");
//     }
// });
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("server is running on 8000")
// })


// second Example :- 
const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.end("HOME PAGE")

    }
    else if(req.url=="/about")
    {
        res.end("ABOYT PAGE")
    }
    else if(req.url=="/Information")
    {
        res.end("INformation page")
    }   
    else
    {
        res.end("Error 404 NOT found")
    }
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("server is start")
})