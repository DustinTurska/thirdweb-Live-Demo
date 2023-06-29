import React from "react";
import { ThirdwebProvider, useContract, useContractEvents } from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useContractEvents };

const code = `function App() {
    const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
    const { data, isLoading, error } = useContractEvents(contract);
  }`;

export default function UseContractEvents() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
