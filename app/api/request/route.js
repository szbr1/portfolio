import dbConnect from "@/lib/db";
import RequestModel from "@/lib/model/request.model";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await dbConnect()
        const body = await req.json()
        const {username, email, description } = body;

        if(!username || !email || !description ) {
        return    NextResponse.json({msg: "Please Fill All The Fields"})
        }
        
       await RequestModel.create({
            username,
            email,
            description
        });

      return  NextResponse.json({msg: "Your Mail is submited Successfully", status: 200})


    } catch (error) {
        console.error(error)
      return  NextResponse.json({msg: "There is Some Network Issues Try again letter."})
    }
}