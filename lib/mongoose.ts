
import mongoose from "mongoose"

let isConnected = false;

export const connectDB = async ()=>{
    mongoose.set("strictQuery",true)

    if(!process.env.MONGODB_URL) {
        return console.log("MongoDb not connected")
    }
    if (isConnected) {
        return console.log("mongoDb Already connected ")
    }
  try {
    await mongoose.connect(process.env.MONGODB_URL, );
    isConnected = true;
    console.log("MongoDb connected Successfully")
  } catch (error) {
    console.log("MongoDb connection failed", error)
  }
}