const express = require("express");
const app = express();
const connectDB = require("./config/database")
const User = require("./models/user")

app.use(express.json())

app.post("/signup",async (req,res)=>{
    const user = new User(req.body)
    try{
        await user.save(res.send("User Added Successfully"));
    }catch(err){
        res.status(401).send("Error saving the user:" + err.message);
    }})

// Feed API - GET /feed - get all the users from the DB;


connectDB().then(()=>{
    console.log("Database connect established..")
    app.listen(3000,()=>{
        console.log("Server is Successfully listening on port 3000")
    });
}).catch(err=>{
    console.log("Database cannot be connected!")
})



