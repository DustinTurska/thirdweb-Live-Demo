import React from "react";
import { ThirdwebProvider, useChainId } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useChainId };

const code = `function App() {
    const chainId = useChainId();
  
    return <div>{chainId}</div>;
  }`;

export default function UseChainId() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
