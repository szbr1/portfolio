import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    username: {type: String , required: true, },
    email: {type: String,  required: true, unique: true},
    description: {type: String, required: true}
})


const Message =  mongoose.model("messages", MessageSchema);

export default Message