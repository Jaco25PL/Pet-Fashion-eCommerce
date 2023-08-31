import styles from "./styles.module.css"
import { useState } from "react"

export const ItemCount = () => {

    const [count, setCount] = useState(1)


    const add = () => {
        setCount(count + 1)
    }
    const subtract = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(1)
    }


    return (
        <div className={styles["countContainer"]}>
            <button onClick={() => subtract()} className={styles["btnCount"]}>-</button>
            <span className={styles["showCount"]}>{count}</span>
            <button onClick={() => add()} className={styles["btnCount"]}>+</button>
        </div>
    )
} 