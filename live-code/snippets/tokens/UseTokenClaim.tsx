import React from "react";
import { ThirdwebProvider, useClaimToken, useContract, Web3Button, useAddress } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {React, ThirdwebProvider, useClaimToken, useContract, Web3Button, useAddress};
const code = `function App() {
    const address = useAddress();
    const { contract } = useContract("0x1849f01CfB941314A317daa0c88b84713A75D329");
    const { mutateAsync: claimToken, isLoading, error } = useClaimToken(contract);
  
    return (
      <Web3Button
        contractAddress="0x1849f01CfB941314A317daa0c88b84713A75D329"
        action={() =>
          claimToken({
            to: address, // Use useAddress hook to get current wallet address
            amount: 100, // Amount of token to claim
          })
        }
        onSuccess={(result) => alert("100 Tokens claim! 🥳")}
        onError={(error) => alert("Something went wrong!")}
        onSubmit={() => console.log("Transaction submitted")}
      >
        Claim Token
      </Web3Button>
    );
  }`;

export default function useTokenClaim() {
    return <LiveCodeEditor code={code} additionalScope={scope} />;
}
