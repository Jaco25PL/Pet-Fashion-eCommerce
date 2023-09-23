import "../../App.css"
import Toastify from "toastify-js"
import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import { CheckOutItem } from "../CheckOutItem/CheckOutItem"
import { Loader } from "../Loader/Loader"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { db } from "../../firebase/client"
import { collection, addDoc } from "firebase/firestore"

export const CheckOut = ( {setCheckout} ) => {

    const { cartItemsQuantity, totalCost, cart } = useContext(CartContext)

    const [orderId, setOrderId] = useState("")
    const [confirm, setConfirm] = useState(false)
    const [loading, setLoading] = useState()
    const [ values, setValues ] = useState({
        userName: "",
        phone: "",
        email: ""
    })


    const handleForm = (e) => {
        setConfirm(true)
        e.preventDefault()
    }

    const handleValues = (e) => {
        const updatedValues = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(updatedValues)
    }

    const handlePayment = (data) => {
       if(confirm){
            const order = {
                client: data,
                items: cart,
                total: totalCost() 
            }
            setLoading(true)

            const orderRef = collection(db, "orders")

            addDoc(orderRef, order)
                .then((doc) => {
                    setOrderId(doc.id)
                    setLoading(false)

                })

        }else{
            Toastify({
                text: "You must sign up",
                className: "info",
                gravity: "top",
                style: {
                    background: "linear-gradient(to right, #111, #444)",
                    borderRadius: ".5rem",
                    cursor: "default"
                }
            }).showToast()
        }
    }

    const sendModal = () => {
        Toastify({
            text: "Successfully signed up!",
            className: "info",
            gravity: "top",
            style: {
                background: "linear-gradient(to right, #111, #444)",
                borderRadius: ".5rem",
                cursor: "default",
            }
        }).showToast()
    }

    useEffect(() => {
        confirm && sendModal()
    }, [confirm])


    if(loading === false){
        return(
            <CheckOutItem client={values} orderId={orderId}/>
        )
    }

    return (
        <div className={styles.background}>

            {
                loading && (
                    <div className={styles.loading}>
                        <Loader />
                    </div>
                )
            }

            <div className={styles.container}>
                <button onClick={() => setCheckout(false)} className={`bi bi-x-lg ${styles.back}`}/>

                <div className={styles.userInfo}>
                    <h1 className={styles.user}>Sign Up</h1>
                    <form className={styles.user} onSubmit={handleForm}>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            value={values.userName}
                            name="userName"
                            onChange={handleValues}
                            required={true}
                        />
                        <input 
                            type="number" 
                            placeholder="Phone" 
                            value={values.phone}
                            name="phone"
                            onChange={handleValues}
                            required={true}
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={values.email}
                            name="email"
                            onChange={handleValues}
                            required={true}
                        />
                        <button type="submit" className="btn">Send</button>
                    </form>
                </div>

                <div className={!confirm ? styles.opacity : undefined}>
                    <p className={styles.userBuy}>Purchase Confirm</p>
                    <div className={styles.userBuy}>
                        <div className={styles.userBuyInfo}>
                            <span>Total items:</span>
                            <span>{cartItemsQuantity()}</span>
                        </div>
                        <div className={styles.userBuyInfo}>
                            <span>Total Amount:</span>
                            <span>{totalCost()}</span>
                        </div>
                        <button className={`btn ${!confirm ? "btnStatic" : ""}`} onClick={() => handlePayment(values)}>Confirm Payment</button>
                    </div>
                </div>
            </div>
        </div>    
    )
}