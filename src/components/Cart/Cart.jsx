import { useContext } from "react"
import styles from "./styles.module.css"
import { CartContext } from "../../context/cartContext"
import { CartItem } from "../CartItem/CartItem"

export const Cart = () => {

    const { cart, cartItemsQuantity, clearCart, remove, totalCost } = useContext(CartContext)
    const quantity = cartItemsQuantity()
    const unit = () =>  quantity > 1 ? (`${quantity} Items`) : `One Item`
    return (

        <>
        <div className={cart.length > 0 ? styles.cartContainer : styles.displayNone}>

            <div className={styles.cart}>
                <div className={styles.cartTitle}><h1>Shopping Cart</h1></div>
                <div className={styles.cartSubtitle}><p>Quantity: {cartItemsQuantity()} items</p></div>
                <div>
                    {
                        cart.map(item => <CartItem key={item.id} remove={remove} item={item}/>)                      
                    }
                </div>
            </div>
            <div className={styles.cartCheckout}>
                <p className={styles.cartPriceInfo}>Purchase Summary</p>
                <div className={styles.cartPriceInfo}>
                    <div>Subtotal</div>
                    <span>{unit()}</span>
                    <div>${totalCost()}</div>
                </div>
                <div className={styles.cartPriceInfo}>
                    <div>Total</div>
                    <div>${totalCost()}</div>
                </div>
                <div className={styles.cartPriceInfo}>
                    <button onClick={clearCart} className={styles.btn}>Clear Cart</button>
                    <button className={styles.btn}>Checkout</button>
                </div>
            
            </div>
        </div>

        <div className={cart.length === 0 ? styles.cartContainer : styles.displayNone}>
            <div className={styles.cart}>
                <div className={styles.cartTitle}><h1>Shopping Cart</h1></div>
                <p className={styles.cartSubtitle}>Your cart is empty :(</p>
            </div>
        </div>
        </>
    )
} 