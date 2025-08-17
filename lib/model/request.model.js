import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
    username: {type: String , required: true, },
    email: {type: String,  required: true},
    description: {type: String, required: true}
})


const RequestModel =  mongoose.model("request", RequestSchema);

export default RequestModel