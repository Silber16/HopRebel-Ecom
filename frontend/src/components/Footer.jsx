import React from 'react'
import { Newsletter } from './Newsletter'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div className='subContainer footerLeft'>
            <div className='footerLeft__logo'><img src="https://firebasestorage.googleapis.com/v0/b/e-commerce-mern-2705b.appspot.com/o/logo%20hop-fotor-bg-remover-2024061413337.png?alt=media&token=1c3afb91-9c17-4deb-93d5-98f671448856" alt="logo footer" /></div>
            <div>
            <Link to="/contacto&Redes" className='footerLeft__lk'>
              <span className="material-symbols-outlined footerLeft__lk--logo">contact_page</span>
              <span className='footerLeft__lk--txt'>CONTACTO</span>
            </Link>
            </div>
        </div>
       <Newsletter /> 
    </footer>
  )
}
