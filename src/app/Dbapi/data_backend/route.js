/*import connectionToDatabase from "@/lib/db";
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
}*/
 /*
import mongoose from "mongoose";
import { connStr } from "@/lib/db";
import user from "@/lib/models/user"; 
import { NextResponse } from "next/server";

export async function GET(){

    await mongoose.connect(connStr)
    const data=await user.find();
    console.log(data)

    return NextResponse.json({result:true})
} */

import mongoose from "mongoose";
import { connStr } from "@/lib/db";
import user from "@/lib/models/user";
import { NextResponse } from "next/server";

// Reusable connection function
async function connectDB() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(connStr);
  }
}

// GET request to fetch all users
export async function GET() {
  try {
    await connectDB();
    const data = await user.find();
    return NextResponse.json({ result: true, data }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ result: false, error: err.message }, { status: 500 });
  }
}



export async function POST(request) {
  try {
    await connectDB();

    const formData = await request.json();

    // ✅ Get the database explicitly
    const db = mongoose.connection.client.db("Feedback");

    // ✅ Choose the collection
    const collection = db.collection("Form");

    // ✅ Insert the document
    const result = await collection.insertOne(formData);

    return NextResponse.json({ insertedId: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ result: false, error: err.message }, { status: 500 });
  }
}

