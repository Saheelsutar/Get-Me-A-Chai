"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"
import Login from "@/models/Login"



export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    let user = await User.findOne({username:to_username})
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: user.razorpaysecret})
    
    instance.orders.create({
        amount: 50000,//in paisa
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
    let options={
        amount:Number.parseInt(amount*100),
        currency:"INR"
    }
    let  x = await instance.orders.create(options)

    //create a payment object which shows a pending payment
    await Payment.create({oid:x.id,amount:amount,to_user:(to_username),name:paymentform.name,message:paymentform.message})
    return x

}

export const fetchUser = async (username) => {
  await connectDB();

  const user = await User.findOne({ username }).lean();

  if (!user) return null;

  return {
    ...user,
    _id: user._id.toString(), // Make _id safe for client
  };
};


export const fetchPayments=async (username) => {
    await connectDB()
    let p = Payment.find({to_user:username,done:true}).sort({amount:-1}).limit(10).lean()
    return p
  }

  export const createData=async(username,password)=>{
    await connectDB();
    await Login.create({username:username,password:password})
  }


  export const ValidateLogin=async (username,password) => {
    await connectDB()
    let l = Login.findOne({username:username,password:password})
    let login = l.lean()
    return login
  }