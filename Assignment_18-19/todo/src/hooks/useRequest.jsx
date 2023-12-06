import { useState } from "react"

const useRequest = ({url, method}) => {
   const [loading, setLoading] = useState(false)

   const sendRequest = (body) => {
    setLoading(true)
    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        body: !!body && method !== "GET" ? 
        JSON.stringify(body) :
        undefined
    })
    .then(res => {
        if(!res.ok) throw new Error("Error!")
        setLoading(false)
        return(res.json())
    })
    
   }
   return{loading, sendRequest}

}

export default useRequest