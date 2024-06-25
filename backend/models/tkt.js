import { Schema, model } from "mongoose";

const tktSchema = new Schema({
    carrito: Array,
    total: Number,
})

const Tkt = model('tkt', tktSchema)

export default Tkt