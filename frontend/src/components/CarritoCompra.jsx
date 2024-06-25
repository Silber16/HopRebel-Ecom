import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartProvider';
import axios from 'axios'

export default function CarritoCompra() {

    const {carrito} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    function calcularTotal() {
        return carrito && carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
      }
  
    const orderData = {
            carrito,
            total
    }

    async function createOrder () {
        try {
          const response = await axios.post(`${import.meta.env.VITE_BACK_URI}/api/mp/crearOrden`, orderData)
          const initPoint = await response.data
          window.open(initPoint)
        } catch (error) {
            console.error("error en crear orden")
        }
    }

    useEffect(() => {
        setTotal(calcularTotal());
    }, [carrito])

  return (
    <div className='cartTotal'>
      <p className='cartTotal__p'>Total: ${total}</p>
      <button className='cartTotal__btn' onClick={createOrder}>Ir a pagar</button>
    </div> 
  )
}

