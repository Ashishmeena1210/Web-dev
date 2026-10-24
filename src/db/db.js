const mongoose = require('mongoose');

async function connectDB() {
    console.log(
        'MONGODB_URI loaded:',
        Boolean(process.env.MONGODB_URI)
    );

    if (!process.env.MONGODB_URI) {
        console.error('MONGODB_URI is missing from environment variables');
        process.exit(1);
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;