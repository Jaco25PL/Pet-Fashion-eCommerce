import "../../App.css"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { Loader } from "../Loader/Loader"



export const Item = ({item}) => {

    const { addToCart } = useContext(CartContext)
    const [ loadImage, setLoadImage ] = useState(true)

    const handleLoading = () => {
        setLoadImage(false)
    }

    return (
        <div  className={styles.item}>
            <div>    
                <div className={styles.imgContainer}>
                    {loadImage && <Loader color={true}/>}
                    <img className={styles.img} src={item.image} alt={item.name} onLoad={handleLoading}/>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.textItem}>{item.title}</p>
                    <p className={styles.textItem}>$ {item.price}</p>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <button onClick={() => addToCart(item, 1)} className="btn">Add to cart</button>
                <Link to={`/item/${item.id}`} className="btn">View more</Link>
            </div>
        </div>
    )
}