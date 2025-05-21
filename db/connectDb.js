import mongoose from "mongoose";
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://stud22sys1:chai@chai.a8g0ykj.mongodb.net/chai`, {
        useNewUrlParser: true,
      });
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
export default connectDB