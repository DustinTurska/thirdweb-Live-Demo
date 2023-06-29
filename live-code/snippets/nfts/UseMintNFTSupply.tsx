import React from "react";
import { ThirdwebProvider, useContract, useMintNFTSupply, Web3Button, useAddress } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useMintNFTSupply, Web3Button, useAddress };

const code = `function App() {
  // Contract must be an ERC-1155 contract that implements the ERC1155Mintable interface
  const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
  const {
    mutateAsync: mintNftSupply,
    isLoading,
    error,
  } = useMintNFTSupply(contract);

  return (
    <Web3Button
      contractAddress="0x5907C77D0b413304667d1764b479ED70eF659e52"
      action={() =>
        mintNftSupply({
          additionalSupply: 5, // Quantity to mint
          to: address, // Address to mint to
          tokenId: 0, // Token ID to add supply to
        })
      }
    >
      Mint NFT Supply
    </Web3Button>
  );
}`;

export default function UseMintNFTSupply() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
