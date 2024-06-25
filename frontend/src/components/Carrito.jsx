import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartProvider';
import CartProd from './CartProd';
import CarritoCompra from './CarritoCompra.jsx';
import CartComprado from './CartComprado.jsx';

export default function Carrito({hideCart}) {
  
  const {carrito, setCarrito, handleEliminar} = useContext(CartContext);
  const [ticket, setTicket] = useState()
  const [cartComprado, setCartComprado] = useState(false)

  const traerTicket = (ticket) => {
    setTicket(ticket)
    console.log(ticket)
  }

  useEffect(() => { 
        const storageCart = localStorage.getItem('cart')
       if (storageCart.length < 1) {
          return 
       }
        setCarrito(JSON.parse(storageCart))
  }, []);

  const cartHeader = (
    <div className='cartContainer__cartHeader'>
      <label className='cartContainer__cartHeader--label'>Carrito</label>
      <button className='cartContainer__cartHeader--btn' onClick={hideCart}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );

  return (
    <>
      {cartHeader}
      <ul className='cartContainer__ul'>
        {carrito != undefined ? carrito.map((prod) => (
          <CartProd prod={prod} key={prod.name} handleEliminar={handleEliminar} />
        )) : <p className='cartFold'>No hay nada en el carrito</p>}
        {cartComprado && <CartComprado ticket={ticket} />}
      </ul>
      <CarritoCompra enviarTicket={traerTicket} setCartComprado={setCartComprado} /> 
    </>
  );
  }
     