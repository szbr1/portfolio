import mongoose from "mongoose";

const mongoDbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected Successfully ")
    } catch (error) {
        console.log("failed to connect with db")
    }
}

export default mongoDbConnection;