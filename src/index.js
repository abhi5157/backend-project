// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";

connectDB();

dotenv.config({
    path: './env'
})











/*
import  express from "express";
const app = express()

// IIFE or Immediately Invoked Function Expression.
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI }/${DB_NAME}`)

        app.on("error",(err)=>{
            console.error("error",err)
            throw err
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is Listening on ${process.env.PORT}`);
        })

    }catch (err){
    console.error("error",err)
    throw err
    }

})()

*/
