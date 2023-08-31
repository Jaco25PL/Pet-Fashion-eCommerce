import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/itemList"
import { useParams } from "react-router-dom"
import { fetchData } from "../../utils/fetchData"

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const showProducts = (data) => {
        if(!id){
            setProducts(data)
        }else{
            const filterCategory = data.filter(product => product.category === id)
            setProducts(filterCategory)
        }
    }

    useEffect(() => {
        fetchData(setLoading, showProducts)
    }, [id])

    return ( 
        <div className={styles.container}>
            <h1 className={styles.titleContainer}>{id ? id : "Home"}</h1>
            {loading ? "Loading..." : <ItemList products={products}/>}
        </div>
    )
}