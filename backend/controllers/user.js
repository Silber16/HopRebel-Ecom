import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

    const userRegister = async (req, res) => {

        try {
            const {usuario, mail, password} = req.body;

             const passwordHash = await bcrypt.hash(password, 10)

            const newUser = new User({
                usuario: usuario,
                mail: mail,
                password: passwordHash 
            })

        newUser.save()

        res.send(newUser)
        } catch {(error) => next(err)}
    }

    const userLogin = async (req, res) => {
        try {
            const {usuario, password} = req.body;
            const user = await User.findOne({usuario})
            const checkPassword = user === null
            ? false 
            : await bcrypt.compare(password, user.password)

            if (!(user && checkPassword)) {
                res.status(401).json({
                    error: "invalid username or password"
                })
            }

            const userToken = {
                user: user.usuario,
                userID: user._id
            }

            const token = jwt.sign(userToken, process.env.SECRET,  { expiresIn: 60*60 })

            res.status(200).send({
                token, 
                user: user.usuario,
                mail: user.mail
            })
        } catch (error) {
            console.error('error login ' + error)
        }
    }

export {userRegister, userLogin};