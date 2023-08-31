import { Link } from 'react-router-dom'
import viteLogo from '../../assets/PetFamilyLogo.png'
import styles from "./styles.module.css"

export const Logo = () => {
  return(  
        <Link to={"/"}>
            <img className={styles.logo} src={viteLogo} alt="Vite logo" />
        </Link>
    )
} 