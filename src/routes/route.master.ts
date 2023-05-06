import express from 'express'
import { getAllUser } from '../controllers/controller.user'

const router = express.Router()

router.get('/', getAllUser)

export default router