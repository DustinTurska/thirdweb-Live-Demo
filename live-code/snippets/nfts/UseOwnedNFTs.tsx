import React from "react";
import { ThirdwebProvider, useOwnedNFTs, useContract, useAddress  } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useOwnedNFTs, useContract, useAddress  };

const code = `function App() {
  const address = useAddress();
  const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
  const { data, isLoading, error } = useOwnedNFTs(contract, address);

  // Return statement with the desired data structure and max width applied
  return (
    <div>
      {data && data.map((nft) => (
        <div key={nft.metadata.id}>
          <h2>{nft.metadata.name}</h2>
          <p>{nft.metadata.description}</p>
          <img
            src={nft.metadata.image}
            alt={nft.metadata.name}
            style={{ maxWidth: "300px" }} // Apply max width of 300px
          />
          {/* Render other properties as needed */}
          <p>Owner: {nft.owner}</p>
          <p>Type: {nft.type}</p>
          <p>Supply: {nft.supply}</p>
          {/* Render quantityOwned only for ERC1155 */}
          {nft.type === "ERC1155" && <p>Quantity Owned: {nft.quantityOwned}</p>}
        </div>
      ))}
    </div>
  );
}`;

export default function UseOwnedNFTs() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
