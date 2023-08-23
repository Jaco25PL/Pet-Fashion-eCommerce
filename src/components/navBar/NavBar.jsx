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
                    <li className={styles.listItem}><button>Electronics</button></li>
                    <li className={styles.listItem}><button>Jewelery</button></li>
                    <li className={styles.listItem}><button>Men's Clothing</button></li>
                    <li className={styles.listItem}><button>Women's Clothing</button></li>
                </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}