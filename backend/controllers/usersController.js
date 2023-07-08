import userModel from "../models/userModel.js";

export async function createUser (req, res) {
    const { name, password, email } = req.body

    const newUser = new userModel({
        name,
        password,
        email
    })
    
    try {
        await newUser.save()
    } catch (error) {
        console.error(error)
    }
    
    res.status(201).json(newUser)
}