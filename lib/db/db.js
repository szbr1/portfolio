import mongoose from "mongoose";

const mongoDbConnection = async()=>{
    try {
        await mongoose.connect()
        console.log("db connected Successfully ")
    } catch (error) {
        
    }
}