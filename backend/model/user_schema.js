//aha validate karenge ki frontend se jo data aa raha h o requirement ko match kar raha h
//ki nahi ,mongoose ke help se karenge 
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min:5,
        max:20
    },
   
    lastname: {
        type: String,
        required: true,
        trim: true,
        min:5,
        max:20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
})


const user=mongoose.model("user",userSchema)

export default user;
