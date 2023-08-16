import express from "express"
import * as usersController from "../controllers/usersController.js"

const router = express.Router();
router.post('/register', usersController.createUser)
router.post('/login', usersController.logIn)
router.get('/isUserAuth', usersController.verifyJWT)

export default router