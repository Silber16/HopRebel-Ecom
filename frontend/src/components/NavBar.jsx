import React from 'react'
import { Link } from 'react-router-dom';
import '../estilos.scss'


export const NavBar = ( {hideMenu} ) => {
  return (
    <>   
          <ul className='nav--ul'>
              <li className='nav--ul__li'><Link onClick={hideMenu} to="/remeras">Remeras</Link></li>
              <li className='nav--ul__li'><Link onClick={hideMenu} to="/hoodies">Hoodies</Link></li>
              <li className='nav--ul__li'><Link onClick={hideMenu} to="/gorras">Gorras</Link></li>
              <hr />
              <li className='nav--ul__li'><Link onClick={hideMenu} to="/contacto&Redes" >Contacto</Link></li>
          </ul>
    </>
  )
}
