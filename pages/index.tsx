import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import ConnectWalletEditor from "../live-code/snippets/ui/ConnectWalletEditor";
import UseNFTHook from "../live-code/snippets/nfts/UseNFTHook";
import UseAirdropHook from "../live-code/snippets/nfts/UseAirdropHook";
import UseAddressHook from "../live-code/snippets/UseAddress";
import UseContractRead from "../live-code/snippets/UseContractReadEditor";
import UseContractWrite from "../live-code/snippets/UseContractWrite";
import UseContractEvents from "../live-code/snippets/UseContractEvents";
import UseSDK from "../live-code/snippets/UseSDK";
import UseChain from "../live-code/snippets/UseSDK";
import UseSwitchChain from "../live-code/snippets/network/UseSwitchChain";
import UseChainId from "../live-code/snippets/network/UseChainId";
import UseNetworkMismatch from "../live-code/snippets/network/UseNetworkMismatch";
import UseBrunNFT from "../live-code/snippets/nfts/UseBrunNFT";
import UseMintNFT from "../live-code/snippets/nfts/UseMintNFT";
import UseMintNFTSupply from "../live-code/snippets/nfts/UseMintNFTSupply";
import UseNFTBalance from "../live-code/snippets/nfts/UseNFTBalance";
import UseOwnedNFTs from "../live-code/snippets/nfts/UseOwnedNFTs";
import UseTotalCirculatingSupply from "../live-code/snippets/nfts/UseTotalCirculatingSupply";
import UseTotalCount from "../live-code/snippets/nfts/UseTotalCount";
import UseTransferNFT from "../live-code/snippets/nfts/UseTransferNFT";
import UseClaimerProofs from "../live-code/snippets/UseClaimerProofs";
import UseConnectionStatus from "../live-code/snippets/walletConnection/UseConnectionStatus";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="./network" className={styles.card}>
            <h2>Network Connection &rarr;</h2>
            <p>
              Live code editor for thirdweb Network Connection hooks
            </p>
          </a>

          <a href="./nfts" className={styles.card}>
            <h2>NFTs &rarr;</h2>
            <p>
              Live code editor for thirdweb NFT hooks
            </p>
          </a>

          <a href="./walletconnection" className={styles.card}>
            <h2>Wallet Connection &rarr;</h2>
            <p>
              Live code editor for thirdweb Wallet hooks
            </p>
          </a>

          <a href="./uicomponents" className={styles.card}>
            <h2>UI Components &rarr;</h2>
            <p>
              Live code editor for thirdweb UI Components
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
