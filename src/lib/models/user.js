import mongoose from "mongoose";
const userSchema = new mongoose.Schema({name: {type:String ,required :true} , email : {type:String } ,phone :{type:String} ,
message:{type:String} }) //check type text

//const user=mongoose.models.user || mongoose.model("user",userSchema)
//check if user already exists else create a document

//export default user 

const user=mongoose.models.col1 || mongoose.model("col1",userSchema);
export default user