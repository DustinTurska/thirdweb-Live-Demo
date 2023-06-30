import React from "react";
import { ThirdwebProvider, useContract, useClaimNFT, Web3Button, useAddress } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useClaimNFT, Web3Button, useAddress };

const code = `function App() {
    const address = useAddress();
    const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
    const { mutate: claimNft, isLoading, error } = useClaimNFT(contract);
  
    return (
      <Web3Button
        contractAddress="0x5907C77D0b413304667d1764b479ED70eF659e52"
        action={() =>
          claimNft({
            to: address, // Use useAddress hook to get current wallet address
            quantity: 1,
            tokenId: 0,  
          })
        }
        onSuccess={(result) => alert("Yay! NFT Claimed! 🥳")}
        onError={(error) => alert("Something went wrong!")}
      >
        Claim NFT
      </Web3Button>
    );
  }`;

export default function UseClaimNFT() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
