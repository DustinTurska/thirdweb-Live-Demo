import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseLogin from "../../live-code/snippets/auth/UseLogin";
const Metadata: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>useLogin</h2>
        <UseLogin />
      </main>
    </div>
  );
};

export default Metadata;
