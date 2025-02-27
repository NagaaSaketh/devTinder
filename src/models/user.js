const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required:true,
        minLength:4

    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address" + value);
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a strong password " + value);
            }
        }
        
    },
    age:{
        type:Number
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Please give appropriate gender value")
            } 
        }
    },
    photoUrl:{
        type:String,
        default:"https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU="
    },
    about:{
        type:String,
        default:"Hi There!"
    },
    skills:{
        type:[String],
    }

},{timestamps:true})

module.exports = mongoose.model("User",UserSchema);
