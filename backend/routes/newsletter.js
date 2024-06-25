import express from 'express'
import newslController from '../controllers/newsletter.js';

const newslRouter = express.Router();

newslRouter.post('/', newslController)

export default newslRouter