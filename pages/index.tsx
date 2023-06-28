import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import ConnectWalletEditor from "../live-code/snippets/ConnectWalletEditor";
import UseNFTHook from "../live-code/snippets/UseNFTHook";
import UseAirdropHook from "../live-code/snippets/UseAirdropHook";
import UseAddressHook from "../live-code/snippets/UseAddress";
import UseContractRead from "../live-code/snippets/UseContractReadEditor";
import UseContractWrite from "../live-code/snippets/UseContractWrite";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Connect Wallet</h2>
        <ConnectWalletEditor />
        <h2>useAddress</h2>
        <UseAddressHook />
        <h2>useContractRead</h2>
        <UseContractRead />
        <h2>useContractWrite</h2>
        <UseContractWrite />
        <h2>useNFT</h2>
        <UseNFTHook />
        <h2>useAirdropNFT</h2>
        <UseAirdropHook />
      </main>
    </div>
  );
};

export default Home;
