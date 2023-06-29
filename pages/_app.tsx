import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import ChainContext from "../context/Chain";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedChain, setSelectedChain] = useState("ethereum");

  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      <ThirdwebProvider activeChain={selectedChain}>
        <Navbar />
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ChainContext.Provider>
  );
}

export default MyApp;