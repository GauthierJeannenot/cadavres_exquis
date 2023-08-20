import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, {timestamps: true})

export default mongoose.model('User', userSchema);