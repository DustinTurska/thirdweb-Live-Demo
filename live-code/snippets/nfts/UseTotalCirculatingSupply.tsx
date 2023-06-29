import React from "react";
import { ThirdwebProvider, useTotalCirculatingSupply, useContract } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";
import { BigNumber } from "bignumber.js";

const scope = { React, BigNumber, ThirdwebProvider, useTotalCirculatingSupply, useContract };

const code = `function App() {
    const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
    const { data, isLoading, error } = useTotalCirculatingSupply(
      contract,
      0,
    );

    // Check if data exists and is a valid BigNumber
    const totalCirculatingSupply = data && BigNumber(data);
  
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <p>Total Circulating Supply: {totalCirculatingSupply.toString()}</p>
        )}
      </div>
    );
  }`;

export default function UseTotalCirculatingSupply() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
