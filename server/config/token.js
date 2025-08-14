import jwt from "jsonwebtoken";


const generateToken = (req,res,userId)=>{
    const token = jwt.sign(userId, process.env.TOKEN_DD, {expiresIn: "7d"})


     res.cookie
    
    
}

export default generateToken;