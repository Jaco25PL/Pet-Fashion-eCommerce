import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export const NavBarCategories = () => {

    return (
        <div className={styles.container}>
            <label htmlFor="menu" className={styles.openMenu}><i className="bi bi-list"></i></label>
            <input className={styles.menu} type="checkbox" id="menu"/>
            <ul className={styles.categoryContainer}>
                <li><Link  className={styles.linkItem} to={"/"}>HOME</Link></li>
                <li><Link  className={styles.linkItem} to={"/category/Wear"}>WEAR</Link></li>
                <li><Link  className={styles.linkItem} to={"/category/Accessories"}>ACCESSORIES</Link></li>
                <li><Link  className={styles.linkItem} to={"/ourStory"}>OUR STORY</Link></li>
            </ul>
            <span className={styles.bgFilter}/>
        </div>
    )
}