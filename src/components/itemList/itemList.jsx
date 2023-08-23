import { useEffect, useState } from "react"
import styles from "./styles.module.css"

export const ItemList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .catch(e => console.error(e))
    }, [])




    return (
        <div div className={styles["cardContainer"]}>
            {/* {products.map(product => (
                <div>
                    <div><img className={styles["img"]} src={product.image}></img></div>
                    <div>
                        <ul key={product.id}>
                            <li className={styles["title"]}>{product.title}</li>
                            <li>{product.title}</li>
                            <li>{product.price}</li>
                        </ul>
                    </div>
                </div>
            ))} */}
        </div>
    )
}