import { useContext } from "react"
import styles from "./styles.module.css"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

export const CartWidget = () => {

    const { cartItemsQuantity } = useContext(CartContext)
    const quantity = cartItemsQuantity()

    return (
        <Link to={"/cart"} className={styles.bag}>
            <i className="bi bi-bag-fill"/>
            <span className={quantity === 0 ? styles.hide : styles.bagNumber}>{cartItemsQuantity()}</span>
        </Link>
    )
}