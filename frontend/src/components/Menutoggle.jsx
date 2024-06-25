import React, { useState } from 'react'
import { NavBar } from './NavBar';
import '../estilos.scss'
import Hamburger from 'hamburger-react'
import Carrito from './Carrito';

export const Menutoggle = () => {

  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isOpen, setOpen] = useState(false)

  const hideMenu = () => {
    setShowNav(false);
    setOpen(false)
  }

  const hideCart = () => {
    setShowCart(false)
  }

  return (
    <div className='menuToggle'>
      <button className='menuToggle__btn' onClick={() => {setShowCart(!showCart)}}><span className="material-symbols-outlined">shopping_cart_checkout</span></button>
      <Hamburger toggled={isOpen} toggle={setOpen} z-index='1000' onToggle={toggled => setShowNav(!showNav)}/>
      <aside className={showCart ? 'cartContainer show' : 'cartContainer menuDesplegable'} >
        <Carrito hideCart={hideCart} />
      </aside>
      <nav className={showNav ? 'navBar-container show' : 'navBar-container'}>
        <NavBar hideMenu={hideMenu}/>
      </nav>
    </div>
  )
}
