import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config';

const getUserId = (req, res) => {


}

export async function createUser(req, res) {
    const { name, password, email } = req.body

    try {
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.send('Email already exists')
        }

        const existingName = await userModel.findOne({ name })
        if (existingName) {
            return res.send('Name already exists')
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
            return res.send({ message: 'Invalid email' })
        }
        const isCorrect = await bcrypt.compare(password, user.password)
        if (!isCorrect) {
            return res.send({ message: 'Invalid email or password' })
        }

        const payload = {
            name: user.name,
            email: user.email,
            id: user._id
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


    if (!token) return res.json({ message: "incorrect Token Given", })

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.json({ isLoggedIn: false, message: "Failed to authenticate" })
        req.user = {}
        req.user.name = decoded.name
        req.user.id = decoded.id

        next()
    })


}

export async function addFriend(req, res) {
    try {
        const token = req.headers['x-access-token']
        if (!token) return res.json({ message: "You are not logged in" })

        const userId = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.json({ message: "Wrong token" })
            const userId = decoded.id
            return userId
        })

        const { targetName } = req.body
        const target = await userModel.findOne({ name: targetName })
        const targetId = target._id

        const updatedUser = await userModel.findByIdAndUpdate(userId, { $push: { friends: targetId } }, { returnDocument: 'after' });

        res.send({ updatedUser })

    } catch (error) {
        console.error(error)
    }
}

export async function deleteFriend(req, res) {

    try {
        const token = req.headers['x-access-token']
        if (!token) return res.json({ message: "You are not logged in" })

        const userId = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.json({ message: "Wrong token" })
            const userId = decoded.id
            return userId
        })


        const { targetName } = req.body
        const target = await userModel.findOne({ name: targetName })
        const targetId = target._id


        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            {
                $pull: { friends: targetId }
            },
            { returnDocument: 'after' }
        );
        res.send(updatedUser)


    } catch (error) {
        console.error(error)
    }

}