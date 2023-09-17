import { useEffect } from "react"
import { db } from "../firebase/client"
import { collection, getDocs } from "firebase/firestore"






// const prod = "/data/data.json"

export const fetchData = (setLoading, showProducts) => {

    
    const productsRef = collection(db, "products")
    
    getDocs(productsRef)
        .then(resp => {
            showProducts(
                resp.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            }))
        })
        .finally(() => setLoading(false))





//     fetch(prod)
//         .then(res => res.json())
//         .then(data => showProducts(data))
//         .catch((e) => console.log(e))
//         .finally(() => setLoading(false))
}