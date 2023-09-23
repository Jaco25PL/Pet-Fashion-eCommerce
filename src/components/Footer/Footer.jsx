import styles from "./styles.module.css"
import { Logo } from "../Logo/Logo"

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <div className={styles.btn}>
                    <Logo/>
                </div>
            </div>
        </div>
    )
}