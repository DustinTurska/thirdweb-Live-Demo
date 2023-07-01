import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseBuyNow from "../../live-code/snippets/marketplace/UseMakeOffer";
import UseCreateAuction from "../../live-code/snippets/marketplace/CreateAuction";
import UseCancelAuction from "../../live-code/snippets/marketplace/UseCancelAuction";
import UseBidInAuction from "../../live-code/snippets/marketplace/UseGetAuction";
import UseCreateListing from "../../live-code/snippets/marketplace/UseCreateListing";
import UseUpdateListing from "../../live-code/snippets/marketplace/UseUpdateListing";
import UseMakeOffer from "../../live-code/snippets/marketplace/UseMakeOffer";
import UseAcceptOffer from "../../live-code/snippets/marketplace/UseAcceptOffer";
import UseCancelOffer from "../../live-code/snippets/marketplace/UseCancelOffer";
import UseCollectAuctionPayout from "../../live-code/snippets/marketplace/UseCollectAuctionPayout";
import UseCollectAuctionTokens from "../../live-code/snippets/marketplace/UseCollectAuctionTokens";
import UseApproveBuyerForListing from "../../live-code/snippets/marketplace/UseApproveBuyerForListing";
import UseApproveCurrencyForListing from "../../live-code/snippets/marketplace/UseApproveCurrencyForListing";
const Metadata: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>useCreateAuction</h2>
        <UseCreateAuction />
        <h2>useCancelAuction</h2>
        <UseCancelAuction />
        <h2>useBidInAuction</h2>
        <UseBidInAuction />
        <h2>useCollectAuctionPayout</h2>
        <UseCollectAuctionPayout />
        <h2>useCollectAuctionTokens</h2>
        <UseCollectAuctionTokens />
        <h2>useCreateDirectListing</h2>
        <UseCreateListing />
        <h2>useUpdateListing</h2>
        <UseUpdateListing />
        <h2>useApproveCurrencyForListing</h2>
        <UseApproveCurrencyForListing />
        <h2>useApproveBuyerForListing</h2>
        <UseApproveBuyerForListing />
        <h2>useMakeOffer</h2>
        <UseMakeOffer />
        <h2>useCancelOffer</h2>
        <UseCancelOffer />
        <h2>useAcceptOffer</h2>
        <UseAcceptOffer />
      </main>
    </div>
  );
};

export default Metadata;
