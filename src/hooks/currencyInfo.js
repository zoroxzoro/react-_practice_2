import { useEffect, useState } from "react";
import axios from "axios";

export function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        setData(res.data[currency]);
        console.log(res.data);
      })
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
