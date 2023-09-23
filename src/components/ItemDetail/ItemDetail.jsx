import styles from "./styles.module.css"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { Loader } from "../Loader/Loader"

export const ItemDetail = ({detail}) => {
    
    const { addToCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)
    const [ newStock, setNewStock ] = useState(0)
    const [ loadImage, setLoadImage ] = useState(true)

    const handleLoading = () => {
        setLoadImage(false)
    }

    const add = () => {
        quantity < detail.stock && setQuantity(quantity + 1)
    }
    const subtract = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }


    useEffect(() => {
            setNewStock(detail.stock - quantity)
    },[quantity])

    
    return (

        <div className={styles.itemContainer}>
            <div className={styles.item}>
                <div className={styles.imgContainer}>
                    {loadImage && <Loader color={true}/>}
                    <img className={styles.img} src={detail.image} alt={detail.title} onLoad={handleLoading}/>
                </div>
            </div>
            <div className={styles.about}>
                <h1 className={styles.aboutItem}>{detail.title}</h1>
                <p className={styles.aboutItem}>{detail.description}</p>
                <p className={styles.aboutItem}>Stock: {newStock}</p>
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