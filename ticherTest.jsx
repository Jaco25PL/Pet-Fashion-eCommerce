// import React, { useState, useEffect } from 'react'


// export const UserProfile = () => {
//     const [user, setUser] = useState({})
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         async function fetchData() {
//             try{
//                 const res = await fetch('https://api.example.com/user') // sacarla a una variable por si quiero hacer un /products o /user
//                 if(!res.ok) throw new Error("Network request failed")
//                 const userData = await res.json()

//                 setUser(userData)
//                 setLoading(false)
//             }catch (err) {err} // estado error y return temorano
//         }

//         fetchData()
//     }, [])

//     return (
//         <>
//             <h1>User Profile</h1>
//             {
//                 loading ? "Loading..." : 
//                 <>
//                     <p>Name: {user?.name || "sin definir"}</p> // de este modo preguntamos si user existe y si user.name es false muestra el mensaje
//                     <p>Email: {user.email}</p>
//                 </>
//             }
//         </>
//     )
// }
