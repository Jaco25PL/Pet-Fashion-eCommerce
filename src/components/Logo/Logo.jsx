import { Link } from 'react-router-dom'
import brandLogo from '../../assets/PetFamilyLogo.png'
import styles from "./styles.module.css"

export const Logo = () => {
  return(  
        <Link to={"/"}>
            <img className={styles.logo} src={brandLogo} alt="Pet-Family" />
        </Link>
    )
} 