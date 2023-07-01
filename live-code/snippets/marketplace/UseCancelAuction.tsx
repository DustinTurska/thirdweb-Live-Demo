import React from "react";
import { ThirdwebProvider, Web3Button} from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, Web3Button };

const code = `function App() {
    return (
      <Web3Button
        contractAddress="0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64"
        action={(contract) => {
          contract.call("cancelAuction", [0])
        }}
        onSuccess={(result) => alert("You have successfully cancelled this auction.")}
        onError={(error) => alert("Something went wrong!")}
      >
        Cancel Auction
      </Web3Button>
    )
  }`;

export default function UseCancelAuction() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
