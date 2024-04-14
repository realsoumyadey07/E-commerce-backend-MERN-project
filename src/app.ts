import express from 'express';

//importing routes

import userRoute from './routes/user.js';
import { connectDB } from './utils/features.js';

const app = express();
const port = 3000;

//connect with database
connectDB();

app.get("/", (req, res)=>{
    res.send("Hi from server");
})

//using routes

app.use("/api/v1", userRoute);

app.listen(port, ()=> {
    console.log(`Server is connected to ${port}`);
    
})