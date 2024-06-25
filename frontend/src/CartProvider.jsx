import React, { createContext, useState } from "react"
    
    export const CartContext = createContext()

    export const CartProvider = ( {children} ) => {
        
        const [carrito, setCarrito] = useState([])

        const handleAgregar = (producto) => {
              const index = carrito.findIndex((item) => item.name === producto.name);
            if (index !== -1) {
              const newCarrito = [...carrito];
              newCarrito[index].cantidad += 1
              setCarrito(newCarrito);
              localStorage.setItem('cart', JSON.stringify(newCarrito))
            } else {
              setCarrito([...carrito, { ...producto, cantidad: 1 }]);
            }
            }
        
        const handleEliminar = (producto) => {
            const index = carrito.findIndex((prod) => prod.name === producto.name);
            if (carrito[index].cantidad > 1) {
              carrito[index].cantidad--;
              const newCarrito = [...carrito];
              setCarrito(newCarrito)
              return
            }
            if (index !== -1) {
                const newCarrito = [...carrito];
                newCarrito.splice(index, 1);
                setCarrito(newCarrito);
                localStorage.setItem('cart', JSON.stringify(newCarrito))
            }
          };

        return (
            <CartContext.Provider value={ {carrito, setCarrito, handleAgregar, handleEliminar} } >
                {children}
            </CartContext.Provider>
        )
    }

