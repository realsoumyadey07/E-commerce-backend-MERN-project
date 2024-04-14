import express from 'express';

//importing routes

import userRoute from './routes/user.js';

const app = express();
const port = 3000;

//using routes

app.use("/api/v1", userRoute);

app.listen(port, ()=> {
    console.log(`Server is connected to ${port}`);
    
})