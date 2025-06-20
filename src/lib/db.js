const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;

//console.log("Username:", username);
//console.log("Password:", password);

export const connStr = `mongodb+srv://${username}:${password}@learntest1.rrvfqq5.mongodb.net/?retryWrites=true&w=majority&appName=learnTest1`;

//console.log("Connection String:", connStr);
