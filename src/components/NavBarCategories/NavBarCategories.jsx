import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export const NavBarCategories = () => {

    return (
        <ul className={styles.categoryContainer}>
            <li><Link  className={styles.linkItem} to={"/"}>HOME</Link></li>
            <li><Link  className={styles.linkItem} to={"/category/Wear"}>WEAR</Link></li>
            <li><Link  className={styles.linkItem} to={"/category/Accessories"}>ACCESSORIES</Link></li>
            <li><Link  className={styles.linkItem} to={"/ourStory"}>OUR STORY</Link></li>
            <li><Link  className={styles.linkItem} to={"/contact"}>CONTACT</Link></li>
        </ul>
    )
}