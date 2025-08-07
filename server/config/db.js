import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL)
      console.log("Connet To Db")
    }catch(error){
      console.log("Not connet")
    }
}
export default connectDB