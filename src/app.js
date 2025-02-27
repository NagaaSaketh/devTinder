const express = require("express");
const app = express();
const connectDB = require("./config/database")
const User = require("./models/user")

app.use(express.json())

app.post("/signup",async (req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.send("User Added Successfully");
    }catch(err){
        res.status(401).send("Error saving the user:" + err.message);
    }})

// find user by email

app.get("/user",async (req,res)=>{
    const userEmail = req.body.emailId
    try{
        const user = await User.findOne({emailId:userEmail})
        if(!user){
            res.status(404).send("User not found")
        }else{
            res.send(user)
        }
        
        // const users = await User.find({emailId:userEmail})
        // if(users.length===0){
        //     res.status(404).send("User not found!")
        // }else{
        //     res.send(users)
        // }
    }catch(err){
        res.status(401).send("Something went wrong")
    }
    
})  


// Feed API - GET /feed - get all the users from the DB;
app.get("/feed", async (req,res)=>{
    try{
        const users = await User.find({})
        res.send(users)

    }catch(err){
        res.status(401).send("Something went wrong")
    }
})
// Delete a User
app.delete("/user",async(req,res)=>{
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete(userId)
        res.send("User deleted successfully")

    }catch(err){
        res.status(401).send("Something went wrong")
    }
})

// Update a User

app.patch("/user",async(req,res)=>{
    const userId = req.body.userId
    const data = req.body;
    try{
        const user =  await User.findByIdAndUpdate({_id:userId},data,{
            returnDocument:"before",
            runValidators:true,
        })
        console.log(user);
        res.send("User updated successfully")
    }catch(err){
        res.status(401).send("UPDATE FAILED "+ err.message)
    }
})

connectDB().then(()=>{
    console.log("Database connect established..")
    app.listen(3000,()=>{
        console.log("Server is Successfully listening on port 3000")
    });
}).catch(err=>{
    console.log("Database cannot be connected!")
})



