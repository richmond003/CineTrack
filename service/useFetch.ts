import { useEffect, useState } from "react"

const useFetch = <T>(fetchFunc: () => Promise<T>, autoFech = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true)
            setError(null)
            const result = await fetchFunc();
            setData(result)
        } catch (err) {
            setError(err instanceof Error ? err : new Error('An error occured'));
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null)
    }

    useEffect(() => {
        if (autoFech) {
            fetchData();
        }
    }, [])

    return { data, loading, error, refetchData: fetchData, reset }
}

export default useFetch