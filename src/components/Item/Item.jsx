import "../../App.css"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"



export const Item = ({item}) => {

    const { addToCart } = useContext(CartContext)

    return (
        <div  className={styles.item}>
            <div>    
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={item.image} alt={item.name}/>
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