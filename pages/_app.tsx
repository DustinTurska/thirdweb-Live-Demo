import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import ChainContext from "../context/Chain";
import { ThirdwebProvider, coinbaseWallet, magicLink, metamaskWallet, paperWallet, rainbowWallet, safeWallet, walletConnect } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar";
import { PackageInfo } from "../components/PackageInfo";

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedChain, setSelectedChain] = useState("ethereum");

  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      <ThirdwebProvider 
        activeChain={selectedChain}
        supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
        >
        <Navbar />
        <Component {...pageProps} />
        <PackageInfo />
      </ThirdwebProvider>
    </ChainContext.Provider>
  );
}

export default MyApp;