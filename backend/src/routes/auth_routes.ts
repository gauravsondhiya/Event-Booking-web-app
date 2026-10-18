import express from 'express'
import login_controller from '../controllers/login_controller.ts'
import Signup_controller from '../controllers/signup_controller.ts'
const router = express.Router()

router.get("/login",login_controller)
router.get("/signup",Signup_controller)



export default router