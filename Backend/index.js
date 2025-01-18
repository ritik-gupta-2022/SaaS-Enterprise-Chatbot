import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';  // package for extracting cokie from browser
import authRoutes from './routes/auth.routes.js';
// This line loads environment variables from the .env file into process.env
dotenv.config()


// mongo url
mongoose.connect(process.env.MONGO)
.then(()=>console.log("mongoDB connected"))
.catch((err)=>console.log(err))

const app = express();

app.listen(3000,()=>{
    console.log("server connected at port 3000");
});
const corsOptions = {
};

app.use(cors());

app.options('*', cors()); 

// app.use(cors());
// for converting json data to object sent by server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.get('/',(req,res)=>{
    res.send('hello world');
    console.log("hii");
})

//this middleware will be called when an error is tackled , this is to increase code reusability, global error handler

app.use((err, req, res, next)=>{
    const statusCode = err.StatusCode || 500;
    const message = err.message || 'Internal Server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})