import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseChainId from "../../live-code/snippets/network/UseChainId";
import UseNetworkMismatch from "../../live-code/snippets/network/UseNetworkMismatch";
import UseSwitchChain from "../../live-code/snippets/network/UseSwitchChain";
const Network: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>useChainId</h2>
        <UseChainId />
        <h2>useMismatchNetwork</h2>
        <UseNetworkMismatch />
        <h2>useSwitchChain</h2>
        <UseSwitchChain />
      </main>
    </div>
  );
};

export default Network;
