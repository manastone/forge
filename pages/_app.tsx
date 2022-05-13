import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

function MyApp({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(null) as any;

  useEffect(() => {
    // fix Hydration failed because the initial UI does not match what was rendered on the server
    setRender(
      <BrowserRouter>
        <Component {...pageProps} />
      </BrowserRouter>
    );
  }, []);

  return render;
}

export default MyApp;
