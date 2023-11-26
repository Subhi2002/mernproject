import express from  'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();
const mongoURI = process.env.MONGO;
mongoose.connect("mongodb+srv://subhi:subhi@cluster0.dyxhr52.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err) =>{console.log(err);} );

const app =express();
app.listen(3000 , () =>{
 console.log('Server running on port 3000.....')
});

app.use('/api/user', userRouter);