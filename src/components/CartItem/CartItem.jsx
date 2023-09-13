import styles from "./styles.module.css"

export const CartItem = ({item, remove}) => {

    const unit = () => item.quantity > 1 ? (`${item.quantity} Units`) : (`${item.quantity} Unit`)

    return (
        <div className={styles.item}>
            <div className={styles.container}>
                <img className={styles.img} src={item.img} alt={item.name} />
            </div>

            <div className={styles.container}>
                <div>
                    <p>{item.name} - {item.category}</p>
                    <p>{item.description}</p>
                </div>
                <div>
                    <p>Unity Price: ${item.price}</p>
                    <p>{unit()}</p>
                </div>
                <p>Stock: {item.stock}</p>
            </div>

            <div className={styles.container}>
                <span>Total Price: ${item.price * item.quantity}</span>
                <button onClick={() => remove(item.id)} className={styles.btn}>Remove</button>
            </div>
        </div>
    )
}