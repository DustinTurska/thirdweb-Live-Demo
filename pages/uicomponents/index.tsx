import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import ConnectWalletEditor from "../../live-code/snippets/ui/ConnectWalletEditor";
import UseWeb3Button from "../../live-code/snippets/ui/Web3ButtonEditor";
import MediaRendererEditor from "../../live-code/snippets/ui/MediaRendererEditor";
import ThirdwebNftMediaEditor from "../../live-code/snippets/ui/ThirdwebNftMediaEditor";
const UIComponents: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Connect Wallet</h2>
        <ConnectWalletEditor />
        <h2>Web3 Button</h2>
        <UseWeb3Button />
        <h2>NFT Renderer</h2>
        <MediaRendererEditor />
        <h2>ThirdwebNFTMedia</h2>
        <ThirdwebNftMediaEditor />

      </main>
    </div>
  );
};

export default UIComponents;
