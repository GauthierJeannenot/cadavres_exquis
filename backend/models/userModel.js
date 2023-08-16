import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
}, {timestamps: true})

export default mongoose.model('User', userSchema);