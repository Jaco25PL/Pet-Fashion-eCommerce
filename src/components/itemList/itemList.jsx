import styles from "./styles.module.css"
import { Item } from "../Item/Item"

export const ItemList = ({products}) => {

    return (
        <div className={styles["itemList"]}>
            {products.map(item => <Item key={item.id} item={item} />)}
        </div>
    )
}