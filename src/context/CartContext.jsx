import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {

        const inCart = { ...item, quantity}
        

        const newCart = [...cart]
        const currentCart = newCart.find(prod => prod.id === item.id)

        if(currentCart){
            currentCart.quantity += quantity
        }else{
            newCart.push(inCart)
        }
        setCart(newCart)
    }

    const cartItemsQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const totalCost = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    const remove = (item) => {
        const newCart = cart.filter(p => p.id !== item)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    // useEffect(() => {
        //traer los productos
    // }, [])

    return(
        <CartContext.Provider value={ {
            cart,
            addToCart,
            cartItemsQuantity,
            totalCost,
            clearCart,
            remove
        }}>
            
            {children}

        </CartContext.Provider>
    )
}