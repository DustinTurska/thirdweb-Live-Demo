import React from "react";
import { ThirdwebProvider, useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useContractWrite, Web3Button };

const code = `function App() {
    const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
    const { mutateAsync, isLoading, error } = useContractWrite(
      contract,
      "claim",
    );
  
    return (
      
    <Web3Button
    contractAddress="0x5907C77D0b413304667d1764b479ED70eF659e52"
    action={(contract) => {
      contract.call("claim", [_receiver, _tokenId, _quantity, _currency, _pricePerToken, _allowlistProof, _data])
    }}
  >
    claim
  </Web3Button>
    );
  }`;

export default function UseContractWrite() {
    return <LiveCodeEditor code={code} additionalScope={scope} />;
}
