import React from 'react'

export default function CartProd({prod, handleEliminar}) {
  return (
    <li className='cartProds'>
        <img className='cartProds__img' src={prod.img} alt="remera" />
        <div className='cartProds__info'>
          <h2 className='cartProds__info--name'>{prod.name}</h2>
          <p className='cartProds__info--price'>${prod.precio}</p>
          <p className='cartProds__info--price'>Cantidad: {prod.cantidad}</p>
        </div>
        <span onClick={() => { handleEliminar(prod) }} className="material-symbols-outlined">delete</span>
    </li>
  )
}
