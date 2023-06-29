// Scope is the global scope of the code editor
import React from "react";
import { ThirdwebProvider, useContract, useContractRead } from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContractRead, useContract };

const code = `function App() {
  const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");

  // Read contract with arguments
  const { data, isLoading, error } = useContractRead(
    contract,
    "name",
    [],
  );

  if (error) {
    console.error("failed to read contract", error);
  }

  return (
    <div>{isLoading ? <p>Loading...</p> : <p>Contract Name: {data}</p>}</div>
  );
}`;

export default function UseContractRead() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
