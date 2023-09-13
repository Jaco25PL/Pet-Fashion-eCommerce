import styles from "./styles.module.css"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"

export const ItemDetail = ({detail}) => {
    
    const { addToCart } = useContext(CartContext)
  
    const [quantity, setQuantity] = useState(1)

    const add = () => {
        quantity < detail.stock && setQuantity(quantity + 1)
    }
    const subtract = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    return (

        <div className={styles.itemContainer}>
            <div className={styles.item}>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={detail.img}/>
                </div>
            </div>
            <div className={styles.about}>
                <h1 className={styles.aboutItem}>{detail.name}</h1>
                <p className={styles.aboutItem}>{detail.description}</p>
                <div className={styles.aboutBuy}>
                    <p className={styles.aboutPrice}>$ {detail.price}</p>

                    <ItemCount 
                        quantity={quantity} 
                        add={add} 
                        subtract={subtract}
                        handleAddToCart={() => {addToCart(detail, quantity)}}    
                    />

                </div>
            </div>
        </div>
    )
}