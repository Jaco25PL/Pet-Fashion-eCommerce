import styles from "./styles.module.css"

export const  Loader = ({color}) => {

    return (
    
        <div className={styles.container}>
            <div className={`${styles.loader} ${color && styles.dark}`}/>
        </div>
    )
}