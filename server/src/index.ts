import express, {Request, Response} from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"

mongoose.connect(process.env.MONGODB as string)
.then(()=>{console.log("Connected to DB!")})

const app = express()

app.use(express.json())
app.use(cors())

app.get("/test", async (req:Request, res:Response)=>{
    res.json({message:"Hello"})
})

app.listen(7001, ()=>{
    console.log("Server started at localhost:7001!")
})