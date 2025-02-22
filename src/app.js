const express = require("express");
const app = express();

app.use("/test",(req,res)=>{
    res.send("Hello from the server")
})

app.use("/hello",(req,res)=>{
    res.send("Hello Hello HELLO")
})
app.use("/",(req,res)=>{
    res.send("HELLO WORLD")
})

app.listen(3000,()=>{
    console.log("Server is Successfully listening on port 3000")
});

