import React from "react";
import { ThirdwebProvider, useNFTBalance, useContract } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useNFTBalance };

const code = `function App() {
    const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
    const { isLoading, data, error } = useNFTBalance(
      contract,
      "0x86f2aD57b59bb5BE8091A0a5fDBecb168b63cA17",
      0);
  
    // Render based on the state
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>NFT Balance</h1>
        {data && (
          <div>
            <p>Balance: {data.balance}</p>
          </div>
        )}
      </div>
    );
  }`;

export default function UseNFTBalance() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
