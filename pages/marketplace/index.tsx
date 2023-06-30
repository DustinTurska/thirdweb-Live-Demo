import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseAcceptDirectListingOffer from "../../live-code/snippets/marketplace/UseAcceptDirectListingOffer";
import UseActiveListings from "../../live-code/snippets/marketplace/UseActiveListings";
import UseAuctionWinner from "../../live-code/snippets/marketplace/UseAuctionWinner";
import UseBidBuffer from "../../live-code/snippets/marketplace/UseBidBuffer";
import UseBuyNow from "../../live-code/snippets/marketplace/UseBuyNow";
import UseCancelDirectListing from "../../live-code/snippets/marketplace/UseCancelDirectListing";
import UseDirectListings from "../../live-code/snippets/marketplace/UseDirectListings";
const Metadata: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>useAcceptDirectListingOffer</h2>
        <UseAcceptDirectListingOffer />
        <h2>useActiveListings</h2>
        <UseActiveListings />
        <h2>useAuctionWinner</h2>
        <UseAuctionWinner />
        <h2>useBidBuffer</h2>
        <UseBidBuffer />
        <h2>useBuyNow</h2>
        <UseBuyNow />
        <h2>useCancelDirectListing</h2>
        <UseCancelDirectListing />
        <h2>useDirectListings</h2>
        <UseDirectListings />
      </main>
    </div>
  );
};

export default Metadata;
