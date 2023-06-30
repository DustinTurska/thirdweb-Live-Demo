import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseTokenClaim from "../../live-code/snippets/tokens/UseTokenClaim";
const Tokens: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>useTokenClaim</h2>
        <UseTokenClaim />
      </main>
    </div>
  );
};

export default Tokens;
