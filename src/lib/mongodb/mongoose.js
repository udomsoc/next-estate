import mongoose from "mongoose";

let initilaized = false;

export const connect = async () => {
    mongoose.set('strict', true);

    if (initilaized) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'next-estate',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        initilaized = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error', error);
    }
};  

    