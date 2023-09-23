import "../App.css"
import Toastify from "toastify-js"
import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const initialCart = JSON.parse(localStorage.getItem("cart")) || []
    const [cart, setCart] = useState(initialCart)

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

        Toastify({
            text: "Review cart",
            className: "modal",
            duration: 5000,
            destination: "/cart",
            style: {
                background: "linear-gradient(to right, #111, #444)",
                borderRadius: ".5rem",
            }
        }).showToast()
        Toastify({
            text: "Product added",
                style: {
                background: "linear-gradient(to right, #111, #444)",
                borderRadius: ".5rem",
                cursor: "default"
            }
        }).showToast()
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

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


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