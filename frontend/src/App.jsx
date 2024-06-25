
import { CartProvider } from './CartProvider'
import Carrito from './components/Carrito'
import { Newsletter } from './components/Newsletter'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { ProductosDetail } from './components/ProductosDetail'
import { Menutoggle } from './components/Menutoggle'
import ContactoRedes from './components/ContactoRedes'
import Footer from './components/Footer'
import { Home } from './components/Home'
import Productos from './components/Productos'

function App() {

return (
  <CartProvider>
    <BrowserRouter>
      
      <header>
        <h1><Link to="/" ><img  className='header__title' src="https://firebasestorage.googleapis.com/v0/b/e-commerce-mern-2705b.appspot.com/o/logo%20hop-fotor-bg-remover-2024061413337.png?alt=media&token=1c3afb91-9c17-4deb-93d5-98f671448856" alt="logo web" /></Link></h1>
        <Menutoggle />
      </header>
     
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categoria" element={<Productos />} /> 
          <Route path='/name/:name' element={<ProductosDetail />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path='/contacto&Redes' element={<ContactoRedes />} />
       </Routes>

      <Footer />

    </BrowserRouter>
  </CartProvider>
)
}

export default App
