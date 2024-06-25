import express from 'express'
import {ProdController} from '../controllers/productos.js';

const productRouter = express.Router();

productRouter.get('/', ProdController.allProdC)
productRouter.get('/category/:categoria', ProdController.categoryItemsC)
productRouter.get('/nombre/:name', ProdController.prodNameC)

export default productRouter