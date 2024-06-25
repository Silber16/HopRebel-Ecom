import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartProvider.jsx';
import Carrusel from './Carrusel.jsx';
import axios from 'axios'

export const ProductosDetail = () => {
  const { name } = useParams();
  const { handleAgregar } = useContext(CartContext);
  const [item, setItem] = useState({})  
  
  async function cargarItem() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACK_URI}/api/productos/nombre/${name}`)
      const responseData = await response.data
      setItem(responseData)
    } catch (error) {
      console.error(error + " hola errrorrrr")
    }
  }

  useEffect(() => {
    
    cargarItem()

  }, [])


  return (
    <div className='prodsDetailContainer'>
      {item ? (
        <div className='prodsDetail'>
          <Carrusel item={item} />
          <div className='prodsDetail__info'>
            <h2 className='prodsDetail__info--name'>{item.name}</h2>
            <p className='prodsDetail__info--price'>${item.precio}</p>
            <p className='prodsDetail__info--desc'>{item.desc}</p>
            <button className="prodsDetail__info--add" onClick={() => { handleAgregar(item) }}>Agregar al carrito</button>
          </div>
        </div>
      ) : (
        <div className='prodsContainer'>
          <p>Producto no encontrado</p>
        </div>
      )}
    </div>
  );
};