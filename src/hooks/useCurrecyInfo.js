import { useState, useEffect } from "react"

import React from 'react'

function useCurrecyInfo(currency) {
    const [data, setData] = useState({});
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result[currency]);
                console.log(data);

            } catch (error) {
                console.log("Failed to return data from API");
            }
        };
        fetchData();
    }, [currency])
    return data;

}

export default useCurrecyInfo