import React from "react";
import {
    ThirdwebProvider,
    useContract,
    useActiveListings,
  } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
    React, ThirdwebProvider,
    useContract,
    useActiveListings,
};

const code = `function App() {
    const { contract } = useContract("0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64", "marketplace");
    const { data, isLoading, error } = useActiveListings(contract);
  }`;

export default function UseActiveListings() {
    return <LiveCodeEditor code={code} additionalScope={scope} />;
}
