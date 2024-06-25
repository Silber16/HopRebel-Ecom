import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const Newsletter = () => {

    const {register, handleSubmit} = useForm()
    const [registrado, setRegistrado] = useState(false)

    const enviar = (datos) => {
      axios.post(`${import.meta.env.VITE_BACK_URI}/api/newsletter`, datos)
      console.log('gracias por suscribirte')
      setRegistrado(true)
    }

  return (
      <div className='subContainer footerRight'>
      <label className='footerRight__lbl'>suscribite a nuestro newsletter para conocer nuevas ofertas y lanzamientos!</label>
      {registrado && <p>Gracias por registrarte. Recibiras nuestras ofertas por mail!</p>}
      <form className='footerRight__form' onSubmit={handleSubmit(enviar)}>
          <input className='footerRight__form--inp' type="email" placeholder='Mail' {...register("mail")} />
          <button className='footerRight__form--btn' type='submit'>Enviar</button>
      </form>
      </div>
  )
}
