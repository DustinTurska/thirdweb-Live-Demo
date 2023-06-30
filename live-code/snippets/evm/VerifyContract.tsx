import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import LiveCodeEditor from "../../LiveCodeEditor";
import { useState } from "react";

const scope = { React, ThirdwebProvider, useState, ThirdwebSDK };

const code = `
const contractAddress = "your_contract_address";
const explorerAPIUrl = "your_explorer_api_url"; // e.g. https://api.etherscan.io/api
const explorerAPIKey = "your_explorer_api_key"; // Generate API key on the explorer

const sdk = new ThirdwebSDK("etherem");

await sdk.verifier.verifyContract(
  contractAddress,
  explorerAPIUrl,
  explorerAPIKey
);`;

export default function VerifyContract() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
