import { useState } from "react"
import styles from "./styles.module.css"

export const CartWidget = () => {

    const [number, setNumber] = useState(0)
    const increment = () => {
        setNumber(number + 1)
    }
    const clear = () => {
        setNumber(0)
    }

    return (

        <>
            <a href="#" className={styles.bag}>
                <i className="bi bi-bag-fill"/>
                <span className={styles.bagNumber}>{number}</span>
            </a>
            <button onClick={increment}>add</button>
        </>
    )
}