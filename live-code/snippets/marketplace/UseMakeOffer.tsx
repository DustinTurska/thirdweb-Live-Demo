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
        contract.call("makeOffer", [ 
          { 
            "assetContract": "0x8Da37534C58D94E338D0b6D57afF34af6CDc2E32", 
            "tokenId": "3", 
            "quantity": "1", 
            "currency": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", 
            "totalPrice": "2", 
            "expirationTimestamp": "0" 
          }
        ])
      }}
      onSuccess={(result) => alert("Offer Submitted 🚀")}
      onError={(error) => alert("Something went wrong!")}
    >
    Make Offer
  </Web3Button>
  )
}`;

export default function UseMakeOffer() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}