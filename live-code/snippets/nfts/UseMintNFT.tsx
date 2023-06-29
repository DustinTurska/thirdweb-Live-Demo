import React from "react";
import { ThirdwebProvider, useContract, Web3Button, useMintNFT, useAddress } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useMintNFT, useContract, Web3Button, useAddress };

const code = `function App() {
    const address = useAddress();
    const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
    const { mutateAsync: mintNft, isLoading, error } = useMintNFT(contract);
  
    return (
      <Web3Button
        contractAddress="0x5907C77D0b413304667d1764b479ED70eF659e52"
        action={() =>
          mintNft({
            metadata: {
              name: "My NFT",
              description: "This is my NFT",
              image: "ipfs://example.com/my-nft.png", // Accepts any URL or File type
            },
            to: address,
          })
        }
      >
        Mint NFT
      </Web3Button>
    );
  }`;

export default function UseMintNFT() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
