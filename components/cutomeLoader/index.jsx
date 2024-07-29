"use client";
// pages/_app.js
import { useEffect, useState } from "react";
import Loader from "../loader";

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Detect when the page has fully loaded
    const handleLoad = () => {
      setLoading(false);
    };

    // Add event listener for the load event
    window.addEventListener("load", handleLoad);

    // Cleanup event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}
