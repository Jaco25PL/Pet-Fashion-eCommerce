import { ItemCount } from "../ItemCount/ItemCount"
import styles from "./styles.module.css"

export const ItemDetail = ({detail}) => {
    
    return (

        <div className={styles["itemContainer"]}>
            <div className={styles["item"]}>
                <div className={styles["imgContainer"]}>
                    <img className={styles["img"]} src={detail.img}/>
                </div>
            </div>
            <div className={styles["about"]}>
                <h1 className={styles["aboutItem"]}>{detail.name}</h1>
                <p className={styles["aboutItem"]}>{detail.description}</p>
                <div className={styles["aboutBuy"]}>
                    <p className={styles["aboutPrice"]}>$ {detail.price}</p>
                    <ItemCount/>
                    <button className={styles["btn"]}>Add to cart</button>     
                </div>
            </div>
        </div>
    )
}