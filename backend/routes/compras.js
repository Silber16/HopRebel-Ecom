import express from 'express'
import { tktController } from '../controllers/tkt.js'

const comprasRouter = express.Router()

comprasRouter.get('/', tktController.getTkts)
comprasRouter.post('/', tktController.postTkts)

export default comprasRouter