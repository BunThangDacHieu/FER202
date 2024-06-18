import mongoose from 'mongoose';
import { config } from 'dotenv';

config(); // Load environment variables

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URL;
        if (!mongoUri) {
            throw new Error('MONGODB_URL is not defined');
        }
        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;