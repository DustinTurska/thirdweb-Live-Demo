import React from "react";
import { ThirdwebProvider, useContract, useTransferNFT, Web3Button } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useTransferNFT, Web3Button };

const code = `function App() {
    // Contract must be an ERC-721 or ERC-1155 contract
    const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
    const {
      mutateAsync: transferNFT,
      isLoading,
      error,
    } = useTransferNFT(contract);
  
    return (
      <Web3Button
        contractAddress="0x5907C77D0b413304667d1764b479ED70eF659e52"
        action={() =>
          transferNFT({
            to: walletAddress, // Address to transfer the token to
            tokenId: tokenId, // Token ID to transfer
          })
        }
      >
        Transfer
      </Web3Button>
    );
  }`;

export default function UseTransferNFT() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
