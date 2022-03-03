import { useEffect } from 'react'

const ArweaveTest = () => {
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await fetch('/api/queryJson').then(res => res.json())
        if (res.ok) {
            console.log('data', res.data)
        }
    }


    return (
        <div>
            Testing sync
        </div>
    )
}
export default ArweaveTest