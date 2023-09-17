import styles from "./styles.module.css"

export const CheckOut = () => {


    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.userInfo}>
                    <div className={styles.user}>
                        <p>Sing In</p>
                    </div>
                    <div className={styles.user}>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <div className={styles.user}>
                        <button>Send</button>
                    </div>
                </div>
                <div className={styles.userBuyConfirm}>
                    <div>
                        <p>B    uy</p>
                    </div>
                    <div>
                        <button>buy</button>
                    </div>
                </div>
            </div>
        </div>    
    )
}