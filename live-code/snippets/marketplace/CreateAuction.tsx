import React from "react";
import { ThirdwebProvider, Web3Button} from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, Web3Button };

const code = `function App() {
  return (
    <Web3Button
      contractAddress="0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64"
      action={(contract) => {
        contract.call("createAuction", [{ 
          "assetContract": "0x8Da37534C58D94E338D0b6D57afF34af6CDc2E32", 
          "tokenId": "0", 
          "quantity": "1", 
          "currency": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", 
          "minimumBidAmount": "1", 
          "buyoutBidAmount": "10", 
          "timeBufferInSeconds": "100", 
          "bidBufferBps": "60", 
          "startTimestamp": "1654280400", 
          "endTimestamp": "1654366800" 
        }])
      }}
      onSuccess={(result) => alert("Yay! Your auction is live! 🥳")}
      onError={(error) => alert("Something went wrong!")}
    >
      Create Auction
    </Web3Button>
  )
}`;

export default function UseCreateAuction() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
