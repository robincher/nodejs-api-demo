const mongoose = require("mongoose");
const mongoHost = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/demo";
const Task = require("../src/models/taskModel"); //created model loading here

mongoose.Promise = global.Promise

const connectDB = async () => {

    mongoose.connect(mongoHost, {
        //useUnifiedTopology: true,
        //seNewUrlParser: true,
        //useCreateIndex: true
        serverSelectionTimeoutMS: 1000, // Defaults to 30000 (30 seconds)
} 
).then(() => {
         console.log('Database Connected....');
}).catch(err => console.log(err));

}

module.exports = connectDB;