/*// app/api/cyclones/route.js
import clientPromise from "@/app/lib/mongodb";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("MapInformation");//database
    const collection = db.collection("Earthquake");//table name

    const data = await collection.find({}).toArray();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching data' }), { status: 500 });
  }
}
*/


import mongoose from "mongoose";
import { connStr } from "@/lib/db";

export async function GET() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(connStr);
    }

    const db = mongoose.connection.useDb("MapInformation");
    const Cyclone = db.collection("Earthquake");

    const data = await Cyclone.find({}).toArray();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
