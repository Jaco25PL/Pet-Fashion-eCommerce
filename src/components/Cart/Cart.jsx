import styles from "./styles.module.css"
import { useContext, useState , useEffect} from "react"
import { CartContext } from "../../context/cartContext"
import { CartItem } from "../CartItem/CartItem"
import { CheckOut } from "../CheckOut/CheckOut"
import { Link } from "react-router-dom"

export const Cart = () => {

    const { cart, cartItemsQuantity, clearCart, remove, totalCost } = useContext(CartContext)
    const quantity = cartItemsQuantity()
    const unit = () =>  quantity > 1 ? (`${quantity} Items`) : `One Item`
    const [ checkout, setCheckout] = useState(false)

    if(cart.length === 0){
        return (
            <div className={styles.cartContainer}>
                <div className={styles.emptyCart}>
                    <div className={styles.cartTitle}><h1>Shopping Cart</h1></div>
                    <div className={styles.emptyCartItems}>
                        <p>Your cart is empty :(</p>
                        <Link className="btn" to="/">Back to Home</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={styles.cartContainer}>

                {checkout && <CheckOut setCheckout={setCheckout}/> }
        
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
                        <button onClick={clearCart} className={`btn ${styles.btn}`}>Clear Cart</button>
                        <button onClick={() => setCheckout(true)} className={`btn ${styles.btn}`}>Checkout</button>
                    </div>
                    
                </div>
            </div>
                    
        </>
    )
} 