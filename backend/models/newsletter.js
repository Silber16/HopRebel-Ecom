import {Schema, model} from "mongoose";

const newsSchema = new Schema({
    mail: {
        type: String,
        require: true,
        unique: true,
    }
})

const Newsl = new model('newslUser', newsSchema)

export default Newsl