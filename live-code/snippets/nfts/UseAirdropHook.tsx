import React from "react";
import { ThirdwebProvider, useContract, useAirdropNFT, Web3Button } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useAirdropNFT, Web3Button };

const code = `function App() {
  const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
  const { mutateAsync: airdropNft, isLoading, error } = useAirdropNFT(contract);

  return (
    <Web3Button
      contractAddress="0x5907C77D0b413304667d1764b479ED70eF659e52"
      action={() =>
        airdropNft({
          addresses: [
            {
              address: "0x124",
              quantity: 8,
            },
            {
              address: "0x120",
              quantity: 2,
            },
            {
              address: "0x127",
              quantity: 5,
            },
          ],
          tokenId: 0,
        })
      }
      onSuccess={(result) => alert("NFTs Airdropped! 🛫 📦")}
      onError={(error) => alert("Something went wrong!")}
    >
      Airdrop NFT
    </Web3Button>
  );
}`;

export default function UseAirdropHook() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
