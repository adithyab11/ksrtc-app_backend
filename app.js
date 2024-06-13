const express=requie("express")
const mongoose=require("mongoose")
const cors=require("cors")
const{ksrtcmodel}=require("./models/ksrtc")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://Adithyab:8281041547@cluster0.uhvrb.mongodb.net/ksrtcDB?retryWrites=true&w=majority&appName=Cluster0")


