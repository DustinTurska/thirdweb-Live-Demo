import React from "react";
import { ThirdwebProvider, useNetworkMismatch } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useNetworkMismatch };

const code = `function App() {
    const isMismatched = useNetworkMismatch();
  
    return <div>{isMismatched}</div>;
  }`;

export default function UseNetworkMismatch() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
