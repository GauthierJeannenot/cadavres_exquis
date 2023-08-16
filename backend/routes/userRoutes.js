import express from "express"
import * as usersController from "../controllers/usersController.js"

const router = express.Router();
router.post('/register', usersController.createUser)
router.post('/login', usersController.logIn)
// router.get('/getusername', usersController.verifyJWT, (req, res) => {
//     res.json({isLoggedIn: true, name: req.user.name})
// })

export default router