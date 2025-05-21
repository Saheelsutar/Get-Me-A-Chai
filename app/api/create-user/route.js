
"use server"
import connectDB from '@/db/connectDb';
import User from '@/models/User';



export const initiateUser = async (formData) => {
    try {
              await connectDB();
              const existingUser = await User.findOneAndUpdate({ email:formData.email },{$set:{  name:formData.name,
                email:formData.email,
                profilepic: formData.profilePicture,
                coverpic: formData.coverPicture,
                razorpayid: formData.razorpayId,
                razorpaysecret: formData.razorpaySecret,}},{new:true});
             
        
            
            }catch (error) {
              console.error(error);
              
            }
          } 
        



