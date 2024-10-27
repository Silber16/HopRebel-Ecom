import React, { useEffect, useState } from 'react'
import '../estilos.css'
import Producto from './Producto.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Productos() {

  const {categoria} = useParams()
  const [productos, setProductos] = useState([])
  const [prodsLoading, setProdsLoading] = useState(true)

  useEffect(() => {
    axios.get(categoria ? `${import.meta.env.VITE_BACK_URI}/api/productos/category/${categoria}` : `${import.meta.env.VITE_BACK_URI}/api/productos`)
      .then(response => {
        if (response.data.length <= 0) {
        return console.error('its empty')
        }
        setProductos(response.data)
        setProdsLoading(false)
        })
      .catch(err => console.error(err + ' fetch error'))
    }, [categoria])

    return (
      <section className='productos-container'>
          <label className='productos-container__label'>{categoria ? categoria.toUpperCase() : "TODOS LOS PRODUCTOS"}</label>
          <div className='prodsContainer'>
                {productos.map((prod, index) => (
                prodsLoading 
                ? <p>Cargando productos...</p>
                : <Producto 
                     producto={prod}
                     key={index}
                   />
                ))}
          </div>

      </section>
    )}