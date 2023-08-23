import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import styles from "./styles.module.css"

export const Logo = () => {
  return(  
        <>
            <a href="https://vitejs.dev" target="_blank">
                <img className={styles.logo} src={viteLogo} alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img className={`${styles.logo} ${styles.react}`} src={reactLogo}  alt="React logo" />
            </a>
        </>
    )
} 