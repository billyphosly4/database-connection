import dotenv from "dotenv"; //need to be install use to call our .env file
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    Path:'./.env'
});

const startServer = async() =>{
    try {
        await connectDB();

 app.on("error",(error) => {
    console.log("ERROR",error);
        throw error;
        });

        app.listen(process.env.PORT || 8000 , ()=>{
            console.log('Server is running on port : ${process.env.PORT}');
        })
    } catch (error) {
        console.log("MongoDb connection failed !!",err);
    }
}
startServer();