import mongoose from "mongoose";// need to be installed since its the one talking to the database

const connectDB = async ()=>{        //we use when we want some task to finish and some to stsrt
  try {
        const connectionInstance = await mongoose.connect

        {'${process.env.MONGODB_URL}'}
        console.log('\n mongodb connected !!! ${connectionInstance.connection.host}');

                                 //for catching error
  } catch (error) {

    console.log("MongoDb conection failed",error);
    process.exit(1)
    
  }

}
export default connectDB;