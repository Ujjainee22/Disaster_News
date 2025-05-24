// lib/mongodb.js
import { MongoClient } from "mongodb";
const username=process.env.username;
const password=process.env.password;
const uri ="mongodb+srv://Ujj:"+password+"@learntest1.rrvfqq5.mongodb.net/?retryWrites=true&w=majority&appName=learnTest1";
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
