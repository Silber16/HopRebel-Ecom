import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartProvider.jsx';

export default function Producto({producto}) {

  const handleAgregar = useContext(CartContext).handleAgregar ;

  return (
      <div className='prodsContainer__container'>
          <Link to={`name/${producto.name}`} ><img className='prods__img' src={producto.img} alt="remera" /></Link>
          <div className='prods__info'>
              <h2 className='prods__info--name'>{producto.name}</h2>
              <p className='prods__info--price'>${producto.precio}</p>
          </div>
          <div className='prods__btns'>
              <button className='prods__btns--add' onClick={() => {handleAgregar(producto)}}><span className="material-symbols-outlined">add_shopping_cart</span></button>
              <Link className='prods__btns--det' to={`/name/${producto.name}`} >Detalles</Link>
          </div>
        </div>
  )
}
