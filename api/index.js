import express from "express";
import connectDB from "../config/db.js"
import authRoutes from "../routes/authRoutes.js";
import uploadRoutes from "../routes/uploadRoutes.js";

const app=express();

app.use(express.json());
connectDB();
app.use(express.urlencoded({ extended: true }));

const PORT=3000;

app.get("/", (req, res)=>{
    res.send("StudyGen Api is running");
    console.log("Server is runnnig")
})


app.use('/api/auth',authRoutes)
app.use('/api/upload',uploadRoutes)




app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});