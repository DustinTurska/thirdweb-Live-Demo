import React from "react";
import LiveCodeEditor from "../../LiveCodeEditor";
import { ConnectWallet, useConnectionStatus } from "@thirdweb-dev/react";

const scope = { ConnectWallet, useConnectionStatus };

const code = `function App() {
    const connectionStatus = useConnectionStatus();
  
    if (connectionStatus === "unknown") return <p> Loading... </p>;
    if (connectionStatus === "connecting") return <p> Connecting... </p>;
    if (connectionStatus === "connected") return <p> You are connected </p>;
    if (connectionStatus === "disconnected")
      return <p> You are not connected to a wallet </p>;
  }`;

export default function UseConnectionStatus() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
