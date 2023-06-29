import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseConnect from "../../live-code/snippets/walletConnection/UseConnect";
import UseConnectionStatus from "../../live-code/snippets/walletConnection/UseConnectionStatus";
import UseSetConnectedWallet from "../../live-code/snippets/walletConnection/UseSetConnectedWallet";
import UseSetConnectedStatus from "../../live-code/snippets/walletConnection/UseSetConnectionStatus";
const WalletConnection: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>useConnect</h2>
        <UseConnect />
        <h2>useConnectionStatus</h2>
        <UseConnectionStatus />
        <h2>useSetConnectedWallet</h2>
        <UseSetConnectedWallet />
        <h2>useSetConnectionStatus</h2>
        <UseSetConnectedStatus />
      </main>
    </div>
  );
};

export default WalletConnection;
