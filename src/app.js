const express = require("express");
const app = express();

// Handle Auth middleware for all GET,POST,... requests

app.use("/admin",(req,res,next)=>{
    const token = "xyz";
    const isAdminAuthorized = token == "xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized Access!")
    }else{
        next();
    }
})
app.get("/admin/getAllData",(req,res)=>{
       res.send("All Data Sent")
    })
app.get("/admin/deleteUser",(req,res)=>{
        res.send("User Deleted")
})


app.listen(3000,()=>{
    console.log("Server is Successfully listening on port 3000")
});

