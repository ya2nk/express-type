import express from 'express'
import { getAllUser } from '../controllers/controller.user'
import { tokenVerify } from '../middlewares/middleware.auth'

const router = express.Router()

router.get("/",getAllUser)

router.use(tokenVerify)



export default router