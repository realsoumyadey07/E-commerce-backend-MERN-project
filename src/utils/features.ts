import mongoose from "mongoose";

export const connectDB = ()=> {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "Ecommerce_MERN"
    })
    .then(c=>console.log("Database is connected"))
    .catch(e=>console.log("Database disconnected!", e));
    
}