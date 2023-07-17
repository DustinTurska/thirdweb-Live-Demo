import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { CronosBeta } from "@thirdweb-dev/chains";
import LiveCodeEditor from "../../LiveCodeEditor";
import { useState } from "react";

const scope = { React, ThirdwebProvider, useState, ThirdwebSDK, CronosBeta };

const code = `const VerificationComponent = () => {
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleVerifyContract = async () => {
    try {
      const sdk = new ThirdwebSDK(CronosBeta);
      const explorerAPIUrl = ""; // Add your explorer API URL here
      const explorerAPIKey = ""; // Add your explorer API key here
      
      const result = await sdk.verifier.verifyThirdwebContract(
        "DropERC721",
        explorerAPIUrl,
        explorerAPIKey,
      );

      setVerificationStatus('Contract verification successful!');
      console.log(result); // Display the verification result in the console
    } catch (error) {
      setVerificationStatus('Contract verification failed.');
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleVerifyContract}>Verify Contract</button>
      <p>{verificationStatus}</p>
    </div>
  );
};`;

export default function VerifyContract() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
