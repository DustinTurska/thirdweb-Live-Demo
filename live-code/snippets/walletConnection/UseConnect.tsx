import React from "react";
import LiveCodeEditor from "../../LiveCodeEditor";
import { ThirdwebProvider,useConnect, metamaskWallet } from "@thirdweb-dev/react";

const metamaskConfig = metamaskWallet();
const scope = { ThirdwebProvider, useConnect, metamaskWallet, metamaskConfig };

const code = `function App() {
    const connect = useConnect();
  
    return (
      <button
        onClick={async () => {
          const wallet = await connect(metamaskConfig, connectOptions);
          console.log("connected to ", wallet);
        }}
      >
        Connect to MetaMask
      </button>
    );
  }`;

export default function UseConnect() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
