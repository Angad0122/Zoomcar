import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import connection from './db.js';
import dotenv from 'dotenv'

import authRoute from "./Routes/authRoutes.js";
import userRoute from "./Routes/userRoutes.js";
import carRoute from "./Routes/carRoutes.js";



dotenv.config()
const app = express()
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/car', carRoute);

connection()
let port = 8080;

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);  
})
