import { useCallback, useEffect, useState } from "react"

interface UseFetchOptions {
  url: string
  method: string
}

interface UseFetchResult {
  response: any
  error: any
  loading: boolean
  resendRequest: () => Promise<void>
}

const useFetch = ({ url, method }: UseFetchOptions): UseFetchResult => {
  const [response, setResponse] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const onFetch = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      })

      if (!res.ok) throw new Error("Response Failed")

      const data = await res.json()
      setResponse(data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [url, method])

  const resendRequest = useCallback(async () => {
    await onFetch()
    onFetch()
  }, [onFetch])

  useEffect(() => {
    onFetch()
  }, [onFetch])

  return { response, error, loading, resendRequest }
}

export default useFetch
