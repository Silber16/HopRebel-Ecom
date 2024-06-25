import React from 'react'

export default function CartComprado({ticket}) {
  return (
    <div>
        <label>Tu compra:</label>
        {ticket.carrito.map((producto,index) =>
            <h3 key={index}>{producto.name}</h3>)}
            <p>total: ${ticket.total}</p>
    </div>
  )
}
