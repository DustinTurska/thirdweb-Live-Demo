import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import ConnectWalletEditor from "../live-code/snippets/ConnectWalletEditor";
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

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Connect Wallet</h2>
        <ConnectWalletEditor />
        <h2>useAddress</h2>
        <UseAddressHook />
        <h2>useContractRead</h2>
        <UseContractRead />
        <h2>useContractWrite</h2>
        <UseContractWrite />
        <h2>useContractEvents</h2>
        <UseContractEvents />
        <h2>useChain</h2>
        <UseChain />
        <h2>useSwitchChain</h2>
        <UseSwitchChain />
        <h2>useChainId</h2>
        <UseChainId />
        <h2>useNetworkMismatch</h2>
        <UseNetworkMismatch />
        {/* <h2>useBurnNFT</h2>
        <UseBrunNFT /> */}
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
        <h2>useTotalCircuatingSupply</h2>
        <UseTotalCirculatingSupply />
        <h2>useTotalCount</h2>
        <UseTotalCount />
        <h2>useTransferNFT</h2>
        <UseTransferNFT />
        <h2>useClaimProofs</h2>
        <UseClaimerProofs />
        <h2>useAirdropNFT</h2>
        <UseAirdropHook />
      </main>
    </div>
  );
};

export default Home;
