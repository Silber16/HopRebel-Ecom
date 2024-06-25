import React from 'react'

export default function ContactoRedes() {
  return (
    <section className='crContainer'>
        <div className='crSubContainer contacto'>
        <label>Contacto</label>
            <div>
                <div className='linkContainer'>
                <span className="material-symbols-outlined">mail</span>
                <a>Hoprebel@gmail.com</a>
                </div>
                <div className='linkContainer'>
                    <span className="material-symbols-outlined">sms</span>
                    <a>+54 9 11 12345678</a>
                </div>
                <div className='linkContainer'>
                    <span className="material-symbols-outlined">call</span>
                    <a>+54 9 11 12345678</a>
                </div>
            </div>
        </div>
        <div className='crSubContainer redes'>
            <label>Redes</label>
            <div>
                <div className='linkContainer'>
                    <i style={{fontSize:'1.6rem'}} className="fa fa-instagram"></i>
                    <a style={{color:'#04ace0'}} href="https://instagram.com">@HopRebel</a>
                </div>
            </div>
        </div>
    </section>
  )
}
