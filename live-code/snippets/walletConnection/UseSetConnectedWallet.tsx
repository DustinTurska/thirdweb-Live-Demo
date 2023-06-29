import React from "react";
import LiveCodeEditor from "../../LiveCodeEditor";
import { ConnectWallet, useSetConnectedWallet, metamaskWallet } from "@thirdweb-dev/react";

const scope = { ConnectWallet, useSetConnectedWallet, metamaskWallet };

const metamaskConfig = metamaskWallet();

const code = `function App() {
    const setConnectedWallet = useSetConnectedWallet();
    const createWalletInstance = useCreateWalletInstance();
  
    const handleConnect = async () => {
      // create a wallet instance using useCreateWalletInstance
      const metamaskWalletInstance = createWalletInstance(metamaskConfig);
      // conect the wallet instance
      await metamaskWalletInstance.connect();
  
      // set the connected wallet as connected
      setConnectedWallet(walletInstance);
    };
  
    return <div> ... </div>;
  }`;

export default function UseSetConnectedWallet() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
