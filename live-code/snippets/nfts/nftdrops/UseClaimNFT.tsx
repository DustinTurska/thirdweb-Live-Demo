import React from "react";
import { ThirdwebProvider, useContract, useClaimNFT, Web3Button } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useClaimNFT, Web3Button };

const code = `function App() {
    const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
    const { mutate: claimNft, isLoading, error } = useClaimNFT(contract);
  
    return (
      <Web3Button
        contractAddress="0x5907C77D0b413304667d1764b479ED70eF659e52"
        action={() =>
          claimNft({
            to: "{{wallet_address}}", // Use useAddress hook to get current wallet address
            quantity: 1,
          })
        }
      >
        Claim NFT
      </Web3Button>
    );
  }`;

export default function UseClaimNFT() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
