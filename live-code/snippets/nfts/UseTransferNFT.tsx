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
          to: "0xFe62CD02AFF3641B89c6718732c4B5042a78De79", // Address to transfer the token to
          tokenId: 0, // Token ID to transfer
          amount: 1, // Amount of tokens to transfer (ERC-1155 only)
        })
      }
      onSuccess={(result) => alert("Yay! 1 NFT Transfered! 🥳")}
      onError={(error) => alert("Something went wrong!")}
    >
      Transfer
    </Web3Button>
  );
};`;

export default function UseTransferNFT() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
