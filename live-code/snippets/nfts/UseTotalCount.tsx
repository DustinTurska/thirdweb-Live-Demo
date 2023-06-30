import React from "react";
import { ThirdwebProvider, useTotalCount, useContract } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useTotalCount, useContract };

const code = `function App() {
    const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
    const { data: totalCount, isLoading, error } = useTotalCount(contract);
  
    let count = [];
    if (totalCount && totalCount.count) {
      count = totalCount.count;
    }
  
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <p>Total Count: {count}</p>
        )}
      </div>
    );
  }`;

export default function UseTotalCount() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
