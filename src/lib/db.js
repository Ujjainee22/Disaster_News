
//const {username,password}=process.env;
//export const connStr = "mongodb://localhost:27017/";


//export const connStr = "mongodb+srv://"+username+":"+password+"@learntest1.rrvfqq5.mongodb.net/?retryWrites=true&w=majority&appName=learnTest1";

const username = process.env.MONGO_USER;
const encodedPassword = encodeURIComponent(process.env.MONGO_PASS);
export const connStr = `mongodb+srv://${process.env.MONGO_USER}:${encodeURIComponent(process.env.MONGO_PASS)}@learntest1.rrvfqq5.mongodb.net/?retryWrites=true&w=majority&appName=learnTest1`;


