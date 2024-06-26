import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors'

import connectDB from './config/db.config.js';
import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js'

dotenv.config();

connectDB();


const app= express();
//middlewares
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);


app.get('/',(req,res)=>{
    res.send("welcome");
});
const PORT=process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`listening on port :${PORT}`.bgCyan.white)
})