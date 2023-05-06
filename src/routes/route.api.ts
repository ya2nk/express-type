import express from 'express'
import { getAllUser, login } from '../controllers/controller.user'
import { tokenVerify } from '../middlewares/middleware.auth'
import routeMaster from './route.master'
const router = express.Router()

router.get("/login", login)
router.use(tokenVerify)
router.use("/master", routeMaster)
export default router