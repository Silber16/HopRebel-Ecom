import preference from "../models/mp.js";

export const crearOrden = async (req, res, next) => {
    
    const {carrito} = await req.body
      try {
        const preferenc = await preference.create({
          body: {
            payment_methods: {
              excluded_payment_methods: [],
            excluded_payment_types: [],
            installments: 1
          },
          notification_url: `https://react-node-mongo-1.onrender.com/webhook`,
          items: carrito.map(prod => ({
              title: prod.name,
              quantity: prod.cantidad,
              unit_price: prod.precio,
              currency_id: "ARS"
          })),
          back_urls: {
            success: "https://react-node-mongo-1-frontend.onrender.com/",
            failure: "https://react-node-mongo-1-frontend.onrender.com/",
            pending: "https://react-node-mongo-1-frontend.onrender.com/"
          },
        
        }
      })
      const initPoint = preferenc.init_point
      res.status(201).json(initPoint)
    } catch(error) {next(error)}
    }

export const recibirWebhook = (req, res) => {
    
    const payment = req.body
    console.log(payment)  

    res.status(200).send('webhook ok')
    
}

