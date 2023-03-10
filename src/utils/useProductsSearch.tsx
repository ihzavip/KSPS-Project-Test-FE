import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "./types";

// require('dotenv').config

export default function useProductsSearch(pageNumber: number) {
  const [results, setResults] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{}>({});
  const [hasNextPage, setHasNextPage] = useState(false);

  const endpoint = `https://codetesting.jubelio.store//wp-json/wc/v3/products?page=${pageNumber}`;
  // const consumerKey = 'ck_1cbb2c1902d56b629cd9a555cc032c4b478b26ce'
  const consumerKey = import.meta.env.VITE_APP_CK
  const consumerSecret = import.meta.env.VITE_APP_CS
  // const consumerSecret = 'cs_7be10f0328c5b1d6a1a3077165b226af71d8b9dc'
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    const config = {
      headers: {
        Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
        "Content-Type": "application/json",
      },
      params: { pageNumber, signal },
    };

    axios
      .get(endpoint, config)
      .then((response) => {
        console.log(response.data);
        var productCount = response.headers["x-wp-total"];
        var pageCount = response.headers["x-wp-totalpages"];
        console.log(`products: ${productCount}, pages: ${pageCount}`);
        setResults((prevResults) => {
          return [...new Set([...prevResults, ...response.data])];
        });
        setHasNextPage(Boolean(response.data.length));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: error.message });
      });

    return () => controller.abort();
  }, [pageNumber]);

  return { isLoading, isError, error, results, hasNextPage };
}
