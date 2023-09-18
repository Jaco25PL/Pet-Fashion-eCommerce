import { useState } from "react"
import "../../App.css"
import styles from "./styles.module.css"

export const CheckOut = ({total, items, quitCheckout} ) => {

    const [ values, setValues ] = useState({
        userName: "",
        phone: 0,
        email: ""
    })

    const handleForm = (e) => {
        console.log("sent", values)
        e.preventDefault()
    }

    const handleValues = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className={styles.background}>

            <div className={styles.container}>
                <button onClick={() => quitCheckout(false)} className={styles.back}>X</button>
                <div className={styles.userInfo}>
                    <h1 className={styles.user}>Sing In</h1>
                    <form className={styles.user} onSubmit={handleForm}>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            value={values.userName}
                            name="userName"
                            onChange={handleValues}
                        />
                        <input 
                            type="number" 
                            placeholder="Phone" 
                            value={values.phone}
                            name="phone"
                            onChange={handleValues}
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={values.email}
                            name="email"
                            onChange={handleValues}
                        />
                        <button type="submit" className="btn">Send</button>
                    </form>
                </div>

                <div className={styles.userBuyConfirm}>
                    <p className={styles.userBuy}>Parchuse Confirm</p>
                    <div className={styles.userBuy}>
                        <div className={styles.userBuyInfo}>
                            <span>Total items:</span>
                            <span>{items()}</span>
                        </div>
                        <div className={styles.userBuyInfo}>
                            <span>Total Amount:</span>
                            <span>{total()}</span>
                        </div>
                        <button className="btn">Confirm Payment</button>
                    </div>
                </div>
            </div>
        </div>    
    )
}