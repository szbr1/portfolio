
import jwt from "jsonwebtoken"


const AdminCheck = (req,res,next)=>{
try {
    const token = req.cookies.atoken

   const decode =  jwt.verify(token, process.env.TOKEN_DD)

   if(!decode){
    return res.status(401).json("Unaothrized token")
   }

   req.userId = decode.userId

   next()
} catch (error) {
    console.error(error)
    return res.status(500).json("Server issues")
}
}


export default AdminCheck