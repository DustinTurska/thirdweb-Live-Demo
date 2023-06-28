import React from "react";
import { ThirdwebProvider, useAddress } from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useAddress };

const code = `function App() {
    const address = useAddress();
  
    if (!address) return <div>No wallet connected</div>;
  
    return <div>My wallet address is {address}</div>;
  }`;

export default function UseAddressHook() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
