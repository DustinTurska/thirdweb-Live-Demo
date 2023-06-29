import React from "react";
import { ThirdwebProvider, useContract, useNFT } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useNFT };

const code = `function App() {
  // The token ID of the NFT you want to fetch
  const tokenId = 0;

  const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
  const { data: nft, isLoading, error } = useNFT(contract, tokenId);

  if (isLoading) return <div>Fetching NFT…</div>;
  if (error) return <div>Error fetching NFT</div>;
  if (!nft) return <div>NFT not found</div>;
  
  return <div style={{display:'flex', flexDirection:'column'}}>
    <strong>{nft.metadata.name}</strong>
    <img src={nft.metadata.image}
    style={{ maxWidth: "300px" }} // Apply max width of 300px
  />
  </div>;
}`;

export default function UseNFTHook() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
