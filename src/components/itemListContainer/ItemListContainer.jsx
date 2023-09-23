import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/itemList"
import { Loader } from "../Loader/Loader"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/client"
import { collection, getDocs, query, where } from "firebase/firestore"


export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    
    
    const productsRef = collection(db, "products")
    const q = categoryId ? query(productsRef, where("category", "==", categoryId)) : productsRef
    
    useEffect(() => {

        getDocs(q)
        .then(res => {
            setProducts(
                res.docs.map(doc => {
                        return {...doc.data(), id: doc.id}})
                )
            })
            .finally(() =>{
                setLoading(false)
            })
            
            
    }, [categoryId])
    
    return ( 
        <div className={styles.container}>
            <h1 className={styles.titleContainer}>{categoryId ? categoryId : "Home"}</h1>
            {loading ? <Loader color={false}/> : <ItemList products={products} />}
        </div>
    )
}