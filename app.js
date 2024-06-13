const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const{ksrtcmodel}=require("./models/ksrtc")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://Adithyab:8281041547@cluster0.uhvrb.mongodb.net/ksrtcDB?retryWrites=true&w=majority&appName=Cluster0")

const bcrypt=require("bcryptjs")
const generateHashedPassword=async(password)=>
    {
        const salt=await bcrypt.genSalt(10)
        return bcrypt.hash(password,salt)
    }
app.post("/signup",async(req,res)=>
{
    let input=req.body
    let hashedPassword=await generateHashedPassword(input.password)
    console.log(hashedPassword)
    input.password=hashedPassword
    let ksrtc=new ksrtcmodel(input)
    ksrtc.save()
    res.json({"status":"success"})
})

app.post("/login",(req,res)=>
{
    let input=req.body
    ksrtcmodel.find({"email":req.body.email}).then(
        (response)=>{
            if(response.length>0){
                let dbPassword=response[0].password
                console.log(dbPassword)
                bcrypt.compare(input.password,dbPassword,(error,isMatch)=>
                {
                    if(isMatch){
                        res.json({"status":"success","userID":response[0]._id})
                    }
                    else{
                        res.json({"status":"incorrect password"})
                    }
                })
            }
        }
    )
})

app.listen(8083,()=>
{
    console.log("server started")
})