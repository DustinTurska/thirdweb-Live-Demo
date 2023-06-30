import React from "react";
import {
    ThirdwebProvider,
    useContract,
    useBidBuffer,
  } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
    React, ThirdwebProvider,
    useContract,
    useBidBuffer,
};

const code = `function App() {
    const { contract } = useContract("0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64", "marketplace");
    const {
      data: bidBuffer,
      isLoading,
      error,
    } = useBidBuffer(contract, 0);
  }`;

export default function UseBidBuffer() {
    return <LiveCodeEditor code={code} additionalScope={scope} />;
}
