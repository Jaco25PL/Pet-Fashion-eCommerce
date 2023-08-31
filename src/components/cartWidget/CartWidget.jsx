import styles from "./styles.module.css"

export const CartWidget = () => {

    return (
        <a className={styles.bag}>
            <i className="bi bi-bag-fill"/>
            <span className={styles.bagNumber}>5</span>
        </a>
    )
}