import connectionToDatabase from "@/lib/db";
import user from "@/lib/models/user";
import { NextResponse } from "next/server"; //whenever  we would like to return a response to the client site NextResponse
//is to be used then 

export async function POST (request){
try{
    await connectionToDatabase() //calling this func 
    // now will extract name & email from 
    const formData = await request.json()

    const newuser=new user(formData) //user func ke call 
    await newuser.save() // to save a recird in the database
    return NextResponse.json(newuser,{status:201})
}

catch(err) {
console.log(err)
}
}