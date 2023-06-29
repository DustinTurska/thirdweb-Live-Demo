import React from "react";
import { ThirdwebProvider, useSwitchChain } from "@thirdweb-dev/react";
import { Goerli } from "@thirdweb-dev/chains";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, Goerli, ThirdwebProvider, useSwitchChain };

const code = `function App() {
    const switchChain = useSwitchChain();
    return (
      <button onClick={() => switchChain(Goerli.chainId)}>
        Switch to Goerli
      </button>
    );
  }`;

export default function UseSwitchChain() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
