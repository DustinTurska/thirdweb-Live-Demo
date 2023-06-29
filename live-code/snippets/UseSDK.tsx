import React from "react";
import { ThirdwebProvider, useChain, useConnectionStatus  } from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useChain, useConnectionStatus  };

const code = `function App() {
    const chain = useChain();
    const status = useConnectionStatus();
  
    if (status === "unknown") return <div> Loading... </div>;
    if (status === "disconnected") return <div> disconnected </div>;
    if (status === "connecting") return <div> connecting... </div>;
  
    if (chain) {
      return <p> Connected to {chain.name} </p>;
    }
  
    return <p> Connected to an unsupported network </p>;
  }`;

export default function UseChain() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
