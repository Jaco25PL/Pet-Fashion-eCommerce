import { Link } from "react-router-dom"
import styles from "./styles.module.css"


export const Item = ({item}) => {

    return (
        <div  className={styles["item"]}>
            <div>    
                <div className={styles["imgContainer"]}>
                    <img className={styles["img"]} src={item.img}/>
                </div>
                <div className={styles['textContainer']}>
                    <p className={styles["textItem"]}>{item.name}</p>
                    <p className={styles["textItem"]}>$ {item.price}</p>
                </div>
            </div>
            <div className={styles["btnContainer"]}>
                <button className={styles["btn"]}>Add to cart</button>
                <Link to={`/item/${item.id}`} className={styles["linkItem", "btn"]}>View more</Link>
            </div>
        </div>
    )
}