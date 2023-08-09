import { Logo } from "../logos/Logos"
import styles from "./styles.module.css"

export const ItemListContainer = ({text}) => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>{text}</h1>
                <div className={styles.itemList}>
                    <Logo/>
                </div>
            </div>
        </div>
    )
}