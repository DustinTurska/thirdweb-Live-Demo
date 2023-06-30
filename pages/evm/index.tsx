import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import VerifyContract from "../../live-code/snippets/evm/VerifyContract";
const EVM: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Verify Contract</h2>
        <VerifyContract />
      </main>
    </div>
  );
};

export default EVM;
