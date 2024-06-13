import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import connectDB from './config/db.config.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

connectDB();


const app= express();
//middlewares
app.use(express.json())
app.use(morgan('dev'));


// routes
app.use('/api/v1/auth',authRoutes)


app.get('/',(req,res)=>{
    res.send("welcome");
});
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`listening on port :${PORT}`.bgCyan.white)
})