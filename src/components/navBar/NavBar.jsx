import logo from "../../assets/logo-pet-family.png"
import { CartWidget } from "../cartWidget/cartWidget"
import styles from "./styles.module.css"

export const NavBar = () => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navItems}>
                <div>
                    <a href="#"><img src={logo} alt="pet family" className={styles.logo}></img></a>
                </div>
                <div>
                <ul className={styles.listContainer}>
                    <li className={styles.listItem}><a href="#">Productos</a></li>
                    <li className={styles.listItem}><a href="#">Nosotros</a></li>
                    <li className={styles.listItem}><a href="#">Contactanos</a></li>
                </ul>
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}