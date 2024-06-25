import Newsl from "../models/newsletter.js"
import transporter from "../utilities/nodemailer.js";

const newslController = async (req, res, next) => {

    const {mail} = await req.body
    const newMail = new Newsl({
        mail: mail
    })
    newMail.save()
        .then(() => console.log('mail guardado'))
        .catch(err => next(err))


    const emailAuto = {
        from: "fransilber16@gmail.com",
        to: `${mail}`,
        subject: "Te suscribiste a nuestro Newsletter",
        text: "Gracias por suscribirte al newsletter. Recibiras nuestras ofertas por este medio"
    }
    
    transporter.sendMail(emailAuto)
}

export default newslController