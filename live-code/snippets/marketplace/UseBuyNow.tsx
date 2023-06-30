import React from "react";
import {
    ThirdwebProvider,
    useContract,
    useBuyNow,
    Web3Button,
  } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
    React, ThirdwebProvider,
    useContract,
    useBuyNow,
    Web3Button,
};

const code = `function App() {
    const { contract } = useContract("0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64", "marketplace");
    const { mutateAsync: buyNow, isLoading, error } = useBuyNow(contract);
  
    return (
      <Web3Button
        contractAddress="0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64"
        action={() =>
          buyNow({
            id: "0", // ID of the listing to buy
            type: ListingType.Direct, // Direct (0) or Auction (1)
            buyAmount: "{{buy_amount}}", // Amount to buy
            buyForWallet: "{{wallet_address}}", // Wallet to buy for, defaults to current wallet
          })
        }
      >
        Buy Now
      </Web3Button>
    );
  }`;

export default function UseBuyNow() {
    return <LiveCodeEditor code={code} additionalScope={scope} />;
}
