import dotenv from "dotenv";
dotenv.config({ path: "./env" });

import connectDB from "./db/index.js";
import express from "express";

const app = express();

connectDB(); // Connect to MongoDB

// Keep the server alive with Express
app.get("/", (req, res) => {
  res.send("✅ Server and DB connected!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});



/*
import express from "express"
const app = express()

;(async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("errror",(error)=>{
        console.log("ERRR: ",error)
        throw error
       })
       app.listen(process.env.PORT,()={
        console.log(`App is listening on port ${process.env.port}`);
       })
    }catch(error){
        console.error("ERROR: ",error)
        throw error
    }
})()
*/