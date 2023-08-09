import styles from "./styles.module.css"

export const ItemListContainer = ({text, about, price}) => {
    return (
        <div className={styles.container}>
            <h1>Producto</h1>
            <div className={styles.textContainer}>
                <p>{text}</p>
                <p>{about}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}