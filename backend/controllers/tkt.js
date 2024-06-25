import Tkt from "../models/tkt.js";


export class tktController {
    
    static getTkts (req, res) {
            res.send(console.log('compra ok'))
        }

    static async postTkts (req, res) {
            
        const ticket = req.body;

        const newTkt = new Tkt({
            carrito: ticket.carrito,
            total: ticket.total
        })

        return newTkt.save()
            .then(newTicket => {

                const carritoClean = newTicket.carrito.map(item => {
                    const { name, cantidad, precio } = item;
                    return { name, cantidad, precio };
                  });
                const ticketClean = {
                    carrito: carritoClean,
                    total: newTicket.total
                }
                res.json(ticketClean)
            })
            .catch(err => next(err))
       }
}