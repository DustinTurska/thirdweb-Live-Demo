import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseAirdropHook from "../../live-code/snippets/nfts/UseAirdropHook";
import UseBrunNFT from "../../live-code/snippets/nfts/UseBrunNFT";
import UseMintNFTSupply from "../../live-code/snippets/nfts/UseMintNFTSupply";
import UseNFTBalance from "../../live-code/snippets/nfts/UseNFTBalance";
import UseNFTHook from "../../live-code/snippets/nfts/UseNFTHook";
import UseOwnedNFTs from "../../live-code/snippets/nfts/UseOwnedNFTs";
import UseTotalCirculatingSupply from "../../live-code/snippets/nfts/UseTotalCirculatingSupply";
import UseTotalCount from "../../live-code/snippets/nfts/UseTotalCount";
import UseTransferNFT from "../../live-code/snippets/nfts/UseTransferNFT";
import UseLazyMint from "../../live-code/snippets/nfts/nftdrops/UseLazyMint";
import UseClaimNFT from "../../live-code/snippets/nfts/nftdrops/UseClaimNFT";
import UseUnclaimedNFTs from "../../live-code/snippets/nfts/nftdrops/UseUnclaimedNFTs";
const NFTs: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>useNFT</h2>
        <UseNFTHook />
        <h2>useOwnedNFTs</h2>
        <UseOwnedNFTs />
        <h2>useLazyMint</h2>
        <UseLazyMint />
        <h2>useClaimNFT</h2>
        <UseClaimNFT />
        <h2>useUnclaimedNFTs</h2>
        <UseUnclaimedNFTs />
        <h2>useTotalCirculatingSupply</h2>
        <UseTotalCirculatingSupply />
        <h2>useTotalCount</h2>
        <UseTotalCount />
        <h2>useTransferNFT</h2>
        <UseTransferNFT />
        <h2>useAirdrop</h2>
        <UseAirdropHook />
        <h2>useBurnNFT</h2>
        <UseBrunNFT />
        <h2>useMintNFTSupply</h2>
        <UseMintNFTSupply />
        <h2>useNFTBalance</h2>
        <UseNFTBalance />
      </main>
    </div>
  );
};

export default NFTs;
