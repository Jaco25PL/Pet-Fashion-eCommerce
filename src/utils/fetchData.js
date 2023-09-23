// import { useEffect } from "react"
// import { db } from "../firebase/client"
// import { collection, getDocs } from "firebase/firestore"



// export const fetchData = (setLoading, showProducts) => {

    
//     const productsRef = collection(db, "products")
    
//     getDocs(productsRef)
//         .then(resp => {
//             showProducts(
//                 resp.docs.map(doc => {
//                 return {...doc.data(), id: doc.id}
//             }))
//         })
//         .finally(() => setLoading(false))

// }