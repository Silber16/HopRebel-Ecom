import express from "express";
import {crearOrden, recibirWebhook} from "../controllers/mp.js";

const mpRouter = express.Router()

mpRouter.post('/crearOrden', crearOrden)

mpRouter.post('/webhook', recibirWebhook)
   
export default mpRouter