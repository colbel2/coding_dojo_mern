import React from 'react';

const CryptoCoinsUsingFetch = ()=>{
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
        .then(response=>{
            console.log("Got info back from API", response)
        })
        .catch(err =>{
            console.log("error", err)
        })
    console.log("This log is after the fetch promise, but when will it run?")
        return (
            <h3>Hello from crypto component</h3>
        )

}

export default CryptoCoinsUsingFetch;