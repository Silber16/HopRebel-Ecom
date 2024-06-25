import './mongo.js'
import express from 'express';
import cors from "cors"
import productRouter from './routes/productos.js'
import comprasRouter from './routes/compras.js'
import userRouter from './routes/user.js'
import newslRouter from './routes/newsletter.js';
import mpRouter from './routes/mp.js';
import errorHandler from './errorHandler.js';

const app = express()

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('funcando')
})

app.use('/api/productos', productRouter);
app.use('/api/compras', comprasRouter);
app.use('/api/user', userRouter)
app.use('/api/newsletter', newslRouter)
app.use('/api/mp', mpRouter)

app.use(errorHandler)

app.use((error, req, res) => (res.status(404).send('no se encontro la ruta')))
app.listen(process.env.PORT, () => {
    console.log(`escuchando en puerto`)
})