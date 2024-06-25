import { Schema, model } from "mongoose";

const prodSchema = new Schema({
    name: String,
    categoria: String,
    precio: Number,
    stock: Number,
    img: String,
    img2: String
})

const Prod = model('prod', prodSchema)

export default Prod