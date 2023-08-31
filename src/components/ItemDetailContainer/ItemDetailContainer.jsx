import styles from "./styles.module.css"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchData } from "../../utils/fetchData"



export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    const showProducts = (data) => {
        const findDetail = data.find(product => product.id === parseInt(id))
        setDetail(findDetail)
    }

    useEffect(() => {
        fetchData(setLoading, showProducts)
    }, [id])

    return (
        <div className={styles.container}>
            {loading ? "loading..." : <ItemDetail detail={detail} />}
        </div>
    )
}