// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js"


dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on server ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.error("Mongodb connection failed !!! ",err)
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
