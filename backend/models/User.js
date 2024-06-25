import {Schema,model} from "mongoose";

const userSchema = new Schema({
    usuario: {
        type: String,
        unique: true,
        required: true
    },
    mail:  {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = new model('user', userSchema);

export default User