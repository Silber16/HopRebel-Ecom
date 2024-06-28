import React, { useEffect, useState } from 'react'
import '../estilos.css'
import Producto from './Producto.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Productos() {

  const {categoria} = useParams()
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(categoria ? `${import.meta.env.VITE_BACK_URI}/api/productos/category/${categoria}` : `${import.meta.env.VITE_BACK_URI}/api/productos`)
      .then(response => {
        if (response.data.length <= 0) {
        return console.error('its empty')
        }
        setProductos(response.data)
        setLoading(false)
        })
      .catch(err => console.error(err + ' fetch error'))
    }, [categoria])

    return (
      <section className='productos-container'>
          <label className='productos-container__label'>{categoria ? productos.categoria : "TODOS LOS PRODUCTOS"}</label>
          <div className='prodsContainer'>
                {productos.map((prod, index) => (
                loading 
                ? <Skeleton className='skeleton_prods'/>
                : <Producto 
                     producto={prod}
                     key={index}
                   />
                ))}
          </div>

      </section>
    )}