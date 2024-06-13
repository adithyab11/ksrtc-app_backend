const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "email":String,
        "phone":String,
        "gender":String,
        "password":String,
        "cpassword":String,
        "busname":String,
        "route":String,
        "busno":String,
        "drivername":String

    }
)

let ksrtcmodel=mongoose.model("ksrtcs",schema);
module.exports={ksrtcmodel}
