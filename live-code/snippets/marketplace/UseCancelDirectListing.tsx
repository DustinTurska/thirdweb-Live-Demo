import React from "react";
import {
    ThirdwebProvider,
    useContract,
    useCancelDirectListing,
    Web3Button,
    useLogin
  } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
    React, ThirdwebProvider,
    useContract,
    useCancelDirectListing,
    Web3Button,
    useLogin
};

const code = `function App() {
    const { login, isLoading } = useLogin();
  
    return (
      <Web3Button
        action={() =>
          login({
            domain: "https://your-domain.com", // Your dapp domain
            statement: "My statement", // Text that the user will sign
            uri: "https://your-domain.com/login", // RFC 3986 URI referring to the resource that is the subject of the signing
            version: "1.0", // The current version of the message, which MUST be 1 for this specification.
            chainId: "mainnet", // Chain ID to which the session is bound
            nonce: "my-nonce", // randomized token typically used to prevent replay attacks
            expirationTime: new Date(2021, 1, 1), // When this message expires
            invalidBefore: new Date(2020, 12, 1), // When this message becomes valid
            resources: ["balance", "history", "info"], // A list of information or references to information the user wishes to have resolved
          })
        }
      >
        Login
      </Web3Button>
    );
  }`;

export default function UseLogin() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}