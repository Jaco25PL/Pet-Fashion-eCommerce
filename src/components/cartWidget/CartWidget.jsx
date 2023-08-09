import { useState } from "react"
import styles from "./styles.module.css"

export const CartWidget = () => {

    const [number, setNumber] = useState(2)
    const increment = () => {
        setNumber(number + 1)
    }

    return (

        <div>
            <button onClick={increment} className={styles.bag}>
                <i className="bi bi-bag-fill"/>
                <span className={styles.bagNumber}>{number}</span>
            </button>
        </div>
    )
}