import React from "react";
import {
    ThirdwebProvider,
    Web3Button
  } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
    React, ThirdwebProvider,
    Web3Button,
};

const code = `function App() {
    return (
      <Web3Button
        contractAddress="0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64"
        action={(contract) => {
          contract.call("approveCurrencyForListing", [
            1, // Listing Id
            0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE, // Currency
            1 //Price
        ])
        }}
      onSuccess={(result) => alert("Currency Approved! ✅")}
      onError={(error) => alert("Something went wrong!")}
    >
    Approve Currency
  </Web3Button>
  )
}`;

export default function UseApproveCurrencyForListing() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}