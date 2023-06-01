import mongoose from "mongoose";

const schema = new mongoose.Schema({
        name : {type: String , required: true , unique: true},
        serving : {type: String , required: true},
        price : {type: Number , required: true},
        description : {type: String },
        img: {type: Buffer},
        rating: {type: Number}
})

export const Items = mongoose.model("Items" , schema)