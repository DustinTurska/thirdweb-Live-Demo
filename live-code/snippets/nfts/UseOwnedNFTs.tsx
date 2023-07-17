import React from "react";
import { ThirdwebProvider, useOwnedNFTs, useContract, useAddress  } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useOwnedNFTs, useContract, useAddress  };

const code = `function App() {
  const address = useAddress();
  const { contract } = useContract("0x94221e64B4f64741534D4F65DCf91842A1cA6ae5");
  const { data, isLoading, error } = useOwnedNFTs(contract, address);

  return (
    <div style={{ height: "600px", overflow: "auto" }}>
      {data && data.map((nft) => (
        <div key={nft.metadata.id}>
          <h2>{nft.metadata.name}</h2>
          <p>{nft.metadata.description}</p>
          <img
            src={nft.metadata.image}
            alt={nft.metadata.name}
            style={{ maxWidth: "300px" }}
          />
          <p>Owner: {nft.owner}</p>
          <p>Type: {nft.type}</p>
          <p>Supply: {nft.supply}</p>
          {nft.type === "ERC1155" && <p>Quantity Owned: {nft.quantityOwned}</p>}
        </div>
      ))}
    </div>
  );
}
`;

export default function UseOwnedNFTs() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
