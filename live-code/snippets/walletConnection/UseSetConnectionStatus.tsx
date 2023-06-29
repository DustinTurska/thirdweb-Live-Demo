import React from "react";
import LiveCodeEditor from "../../LiveCodeEditor";
import { ThirdwebProvider, useSetConnectionStatus } from "@thirdweb-dev/react";

const scope = { React, ThirdwebProvider, useSetConnectionStatus };

const code = `function App() {
    const setConnectionStatus = useSetConnectionStatus();
  
    const handleConnect = () => {
      setConnectionStatus("connecting");
      // manually connect to a wallet
      setConnectionStatus("connected");
    };
  
    const handleDisconnect = () => {
      // manually disconnect from the wallet
      setConnectionStatus("disconnected");
    };
  
    return (
      <div>
        {/* Your app content goes here */}
        <button onClick={handleConnect}>Connect</button>
        <button onClick={handleDisconnect}>Disconnect</button>
      </div>
    );
  }`;

export default function UseSetConnectedStatus() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
