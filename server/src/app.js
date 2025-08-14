import express from "express"
import dotenv from "dotenv";
import mongoDbConnection from "./lib/db.js";
import Message from "./models/message.model.js";
import AdminCheck from "../config/middleware.js";
import generateToken from "../config/token.js";

const app = express();
dotenv.config();

app.use(express.json());

app.post("/api/message", async (req, res) => {
  try {
    const { username, email, description } = req.body;

    if (!username || !email || !description) {
      return res.status(300).json("Please Fill All The Fields");
    }

    return res.status(200).json("Your request has been submited")
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server is not working ");
  }
});

app.get("/api/allmessages", AdminCheck, async(req,res)=>{
try {
   const result =  await Message.find({})
   res.status(200).json(result)
    
} catch (error) {
    console.error(error)
    return res.status(500).json("Server error")
}
})

app.post("/api/asignin", async(req,res)=>{
    try {
        const {email , password, } = req.body;
        if(!email || !password ){
            return res.status(400).json("All Fields Required")
        }

        const user = await User.findOne(email);
        if(!email){
            return res.status(401).json("Invalid Credentials")
        }
       const passwordCheck = bcrypt.compare(user.password, password);

       if(!passwordCheck){
        return res.json(401).json("Invalid Credentials")

       }
       
       generateToken()
       
       return res.status(user)
       

    } catch (error) {
        console.error(error)
        return res.status(500).json("Server Error")
    }
} )

app.post("/api/alogout", async(req,res)=>{
    try {

       req.cookies.atoken = ""
      

        return res.status(200).json("Successfully logout")
    } catch (error) {
        console.error(error)
        return res.status(500).json("Server Error")
    }
} )
mongoDbConnection();

app.listen(6000, () => {
  console.log("http://localhost:6000");
});
