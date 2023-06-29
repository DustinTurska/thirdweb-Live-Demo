import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseAirdropHook from "../../live-code/snippets/nfts/UseAirdropHook";
import UseBrunNFT from "../../live-code/snippets/nfts/UseBrunNFT";
import UseMintNFT from "../../live-code/snippets/nfts/UseMintNFT";
import UseMintNFTSupply from "../../live-code/snippets/nfts/UseMintNFTSupply";
import UseNFTBalance from "../../live-code/snippets/nfts/UseNFTBalance";
import UseNFTHook from "../../live-code/snippets/nfts/UseNFTHook";
import UseOwnedNFTs from "../../live-code/snippets/nfts/UseOwnedNFTs";
import UseTotalCirculatingSupply from "../../live-code/snippets/nfts/UseTotalCirculatingSupply";
import UseTotalCount from "../../live-code/snippets/nfts/UseTotalCount";
import UseTransferNFT from "../../live-code/snippets/nfts/UseTransferNFT";
const NFTs: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>useAirdrop</h2>
        <UseAirdropHook />
        <h2>useBurnBFT</h2>
        <UseBrunNFT />
        <h2>useMintNFT</h2>
        <UseMintNFT />
        <h2>useMintNFTSupply</h2>
        <UseMintNFTSupply />
        <h2>useNFTBalance</h2>
        <UseNFTBalance />
        <h2>useNFT</h2>
        <UseNFTHook />
        <h2>useOwnedNFTs</h2>
        <UseOwnedNFTs />
        <h2>useTotalCirculatingSupply</h2>
        <UseTotalCirculatingSupply />
        <h2>useTotalCount</h2>
        <UseTotalCount />
        <h2>useTransferNFT</h2>
        <UseTransferNFT />
      </main>
    </div>
  );
};

export default NFTs;
