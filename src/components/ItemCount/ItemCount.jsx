import styles from "./styles.module.css"
import "../../App.css"


export const ItemCount = ({quantity, add, subtract, handleAddToCart}) => {


    return (
        <>
            <div className={styles.countContainer}>
                <button onClick={() => subtract()} className={styles.btnCount}>-</button>
                <span className={styles.showCount}>{quantity}</span>
                <button onClick={() => add()} className={styles.btnCount}>+</button>
            </div>        

            <button onClick={handleAddToCart} className="btn">Add to cart</button>     
        </>

    )
} 