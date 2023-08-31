import styles from "./styles.module.css"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchData } from "../../utils/fetchData"



export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(1)
    const { id } = useParams()

    const add = () => {
        setCount(count + 1)
    }
    const subtract = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(1)
    }

    const showProducts = (data) => {
        const findDetail = data.find(product => product.id === parseInt(id))
        setDetail(findDetail)
    }

    useEffect(() => {
        fetchData(setLoading, showProducts)
    }, [id])

    return (
        <div className={styles.container}>
            {loading ? "loading..." : <ItemDetail detail={detail} count={count} add={add} subtract={subtract} reset={reset}/>}
        </div>
    )
}