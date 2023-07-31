//components
import Connection from "./database/db.js";
import dotenv from "dotenv"
import cors from "cors";
//dotenv ko initialize karna hota hai  and env file se kuch v lena ho process. karke likhte h
import bodyParser from "body-parser";
 // a post api ko handle karne mai help karta h, pahle express m inbuilt th ab nahi h
import express from "express";
import Defaultdata from "./defaultdata.js";
import router from "./routes/routes.js";



const app=express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({urlencoded:true}));
app.use( '/',router)

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;




const PORT=8000;
Connection(USERNAME,PASSWORD);
app.listen(PORT,()=>console.log(`backend is running at port ${PORT}`));
// connection ban jaye and server v ban jaye tab data insertion ko cl karenge
Defaultdata();