import mongoose from "mongoose";

const schema = new mongoose.Schema({
        email : {type:String , unique:true , required:true},
        password:{type:String , required:true}
} , {timestamps:true})

export const UserModel = mongoose.model("UserModel" , schema)