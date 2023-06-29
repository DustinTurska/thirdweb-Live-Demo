import React from "react";
import { ThirdwebProvider, useBurnNFT, useContract, Web3Button } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useBurnNFT, useContract, Web3Button };

const code = `function App() {
    const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52);
    const { mutateAsync: burnNft, isLoading, error } = useBurnNFT(contract);
  
    return (
      <Web3Button
        contractAddress="0x5907C77D0b413304667d1764b479ED70eF659e52"
        action={() =>
          burnNft({
            tokenId: 0,
            amount: 1,
          })
        }
      >
        Burn NFT
      </Web3Button>
    );
  }`;

export default function UseBrunNFT() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
