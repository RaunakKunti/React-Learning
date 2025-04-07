// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api/v1/currencies/usd.json

import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({}) // we are passig the empty object because if any value is not provided then we don't want our app crashed when apply loop
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        // console.log(data);
    },[currency])
    return data
}

export default useCurrencyInfo;
