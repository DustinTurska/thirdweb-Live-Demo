import React from "react";
import {
    ThirdwebProvider,
    useContract,
    useAuctionWinner,
  } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
    React, ThirdwebProvider,
    useContract,
    useAuctionWinner,
};

const code = `function App() {
    const { contract } = useContract("0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64", "marketplace");
    const { data, isLoading, error } = useAuctionWinner(
      contract,
      0, // The listing id of the item that you want to get the auction winner for
    );
  }`;

export default function UseAuctionWinner() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}