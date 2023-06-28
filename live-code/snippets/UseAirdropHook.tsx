import React from "react";
import { ThirdwebProvider, useContract, useAirdropNFT, Web3Button } from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useAirdropNFT, Web3Button };

const code = `function App() {
    const { contract } = useContract("0xBE84290DE7aa05E68a9D7f30268eB04ad25d9DD0");
    const { mutateAsync: airdropNft, isLoading, error } = useAirdropNFT(contract);
  
    return (
      <Web3Button
        contractAddress="0x5907C77D0b413304667d1764b479ED70eF659e52"
        action={() =>
          airdropNft({
            addresses: [
              {
                address: "0x123",
                quantity: 1,
              },
            ],
            tokenId: "0",
          })
        }
      >
        Airdrop NFT
      </Web3Button>
    );
  }`;

export default function UseAirdropHook() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
