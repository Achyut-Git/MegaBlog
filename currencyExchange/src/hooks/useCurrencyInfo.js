import { useState, useEffect } from "react";

const useCurrencyInfo = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(()=>{
    const fetchCurrencyData = async ()=>{
        try {
           let response = await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JUJ5YAyj1iEdDgtQ9W0X7RVEfxWOTCGJYXzj6JIf')
           if (!response.ok) {
             throw new Error(`Network response was not ok, Retry ↻`)
           } else {
             let resp = await response.json()
             setData(resp.data)
           }
        } catch (error) {
            setError(error.message)
        }

      }
      fetchCurrencyData();

    },[])
    return { data, error } //returning as an object
};

export default useCurrencyInfo;


