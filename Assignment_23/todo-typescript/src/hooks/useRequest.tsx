import { useState } from 'react'

interface UseRequestOptions {
  method: string;
  url?: string;
}

const useRequest = ({ url = '', method }: UseRequestOptions): { loading: boolean; sendRequest: (body?: any, customUrl?: string) => Promise<any> } => {
  const [loading, setLoading] = useState(false);

  const sendRequest = async (body?: any, customUrl?: string): Promise<any> => {
    setLoading(true);
    const res = await fetch(customUrl || url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY || ""}`,
      },
      body: !!body && method !== 'GET' ? JSON.stringify(body) : undefined,
    })

    const data = await res.json();
    setLoading(false);

    return data;
  }

  return { loading, sendRequest }
}

export default useRequest
