import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const CurrencyContext=createContext();

export const CurrencyContextProvider=({children})=>{
    const [currency, setCurrency]=useState("USD");
    const [rate, setRate]=useState(1);
    const handleCurrencyChange=(newCurrency)=>{
        setCurrency(newCurrency);
    }
    useEffect(()=>{
        if(currency!="USD"){
            axios.get(`https://anyapi.io/api/v1/exchange/convert?base=USD&to=${currency}&amount=1&apiKey=${import.meta.env.VITE_Api_Key}`)
.then(async (res)=>{
                setRate(res.data.rate);
            }).catch((err)=>{
                alert("Something went wrong");
                setCurrency("USD");
            })
        }else{
            setRate(1);
        }
        
    },[currency])

    return <CurrencyContext.Provider value={{currency, handleCurrencyChange,rate}}>
        {children}
    </CurrencyContext.Provider>
}