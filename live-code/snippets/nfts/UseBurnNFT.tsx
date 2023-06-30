import React from "react";
import { ThirdwebProvider, useBurnNFT, useContract, Web3Button } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useBurnNFT, useContract, Web3Button };

const code = `function App() {
  return (
    <Web3Button
      contractAddress="0xf4aef3201aaA673f424c671c19f36087aF541f8f"
      action={(contract) => {
          contract.call("burn", [2])
        }
      }
      onError={(error) => alert("Something went wrong!")}
      onSuccess={(result) => alert("Are you sure you want to burn this token?")}
    >
      Burn NFT
    </Web3Button>
  )
}`;

export default function UseBurnNFT() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
