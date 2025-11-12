import { useEffect, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import LoadingScreen from "../components/LoadingScreen";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return <Component {...pageProps} />;
}
