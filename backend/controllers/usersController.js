import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config';

export async function createUser(req, res) {
    const { name, password, email } = req.body

    try {
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.send('Email already exists')
        }

        const hash = bcrypt.hashSync(password, 10)

        const newUser = new userModel({
            password: hash,
            email,
            name
        })

        await newUser.save()
        res.status(201).json(newUser)

    } catch (error) {
        console.error(error)
    }


}

export async function logIn(req, res) {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.send({message: 'Invalid email'})
        }
        const isCorrect = await bcrypt.compare(password, user.password)
        if (!isCorrect) {
            return res.send({message: 'Invalid email or password'})
        }

        const payload = {
            isLoggedIn: true,
            name: user.name,
            email: user.email,
        }
        jwt.sign(payload,
            process.env.JWT_SECRET,
            { expiresIn: 86400 },
            (err, token) => {
                if (err) return res.json({ message: err })
                return res.json({
                    message: "Success",
                    token
                })
            })
    } catch (error) {
        console.error(error)
    }
}

export const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token']
    

    if (!token) return res.json({message: "incorrect Token Given", })

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.json({isLoggedIn: false, message: "Failed to authenticate"})

        next()
    })
    

}