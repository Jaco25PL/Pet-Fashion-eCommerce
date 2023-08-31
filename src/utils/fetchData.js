export const fetchData = (setLoading, showProducts) => {
    fetch("/data/data.json")
        .then(res => res.json())
        .then(data => showProducts(data))
        .catch((e) => console.log(e))
        .finally(() => setLoading(false))
}