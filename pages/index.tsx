import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

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

          <a href="./metadata" className={styles.card}>
            <h2>Metadata &rarr;</h2>
            <p>
              Live code editor for thirdweb Metadata hooks
            </p>
          </a>

          <a href="./marketplace" className={styles.card}>
            <h2>Marketplace &rarr;</h2>
            <p>
              Live code editor for thirdweb Marketplace v3
            </p>
          </a>

          <a href="./auth" className={styles.card}>
            <h2>Auth &rarr;</h2>
            <p>
              Live code editor for thirdweb auth
            </p>
          </a>

          <a href="./tokens" className={styles.card}>
            <h2>Tokens &rarr;</h2>
            <p>
              Live code editor for thirdweb Tokens
            </p>
          </a>

          <a href="./evm" className={styles.card}>
            <h2>EVM &rarr;</h2>
            <p>
              Live code editor for thirdweb EVM SDK
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
