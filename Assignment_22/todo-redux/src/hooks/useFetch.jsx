import { useCallback, useEffect, useState } from "react";

const useFetch = ({ url, method }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFetch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      });

      if (!res.ok) throw new Error("Response Failed");

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, method]);

  const resendRequest = useCallback(async () => {
    await onFetch();  
    onFetch();  
  }, [onFetch]);

  useEffect(() => {
    onFetch(); 
  }, [onFetch]);

  return { response, error, loading, resendRequest };
};

export default useFetch;
