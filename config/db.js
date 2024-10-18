import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async()=>{
    try{
        const conn=await mongoose.connect(`mongodb+srv://dattatanu20:0LyPjPRlYuPOrPpi@food-app.svej6ph.mongodb.net/?retryWrites=true&w=majority&appName=Food-app`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //serverSelectionTimeoutMS: 5000 // 5 seconds
        });
        console.log(`Connected to MOngoDB ${conn.connection.host}`)
    } catch(error){
        console.log(`Error in MongoDB ${error}`.bgRed.white)
    }
};
export default connectDB;