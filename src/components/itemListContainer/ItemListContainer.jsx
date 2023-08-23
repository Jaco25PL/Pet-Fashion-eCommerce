import { ItemList } from "../itemList/itemList"
import styles from "./styles.module.css"

export const ItemListContainer = ({greeting}) => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>{greeting}</h1>
                <div className={styles.itemList}>
                    <ItemList/>
                </div>
            </div>
        </div>
    )
}