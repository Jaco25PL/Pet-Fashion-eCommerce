import { Logo } from "../Logo/Logo"
import { NavBarCategories } from "../NavBarCategories/NavBarCategories"
import { CartWidget } from "../CartWidget/CartWidget"
import styles from "./styles.module.css"

export const NavBar = () => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navItems}>
                <Logo/>
                <NavBarCategories/>
                <CartWidget/>
            </div>
        </nav>
    )
}