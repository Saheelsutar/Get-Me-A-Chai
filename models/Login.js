import mongoose from "mongoose";
const{Schema,model}=mongoose;
const LoginSchema=new Schema({
    username:{type:String,required:true},
    password:{type:Number,required:true}
});
export default mongoose.models.Login || model("Login",LoginSchema)
