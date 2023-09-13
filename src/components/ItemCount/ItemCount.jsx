import styles from "./styles.module.css"

export const ItemCount = ({quantity, add, subtract, handleAddToCart}) => {


    return (
        <>
            <div className={styles.countContainer}>
                <button onClick={() => subtract()} className={styles.btnCount}>-</button>
                <span className={styles.showCount}>{quantity}</span>
                <button onClick={() => add()} className={styles.btnCount}>+</button>
            </div>        

            <button onClick={handleAddToCart} className={styles.btn}>Add to cart</button>     
        </>

    )
} 