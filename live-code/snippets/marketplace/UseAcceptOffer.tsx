import React from "react";
import {
    ThirdwebProvider,
    useContract,
    useBuyNow,
    Web3Button,
    useAddress
  } from "@thirdweb-dev/react";
  import { ListingType } from "@thirdweb-dev/sdk";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
    React, ThirdwebProvider,
    useContract,
    useBuyNow,
    Web3Button,
    useAddress,
    ListingType,
};

const code = `function App() {
    return (
      <Web3Button
        contractAddress="0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64"
        action={(contract) => {
          contract.call("acceptOffer", [0])
        }}
      onSuccess={(result) => alert("Offer Accepted 💰")}
      onError={(error) => alert("Something went wrong!")}
    >
    Accept Offer
  </Web3Button>
  )
}`;

export default function UseAcceptOffer() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}