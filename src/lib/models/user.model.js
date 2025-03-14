import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        profilePicture: {
            type: String,
            required: true,
            default: '/uploads/default.jpg',
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }, { timestamps: true }

);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;