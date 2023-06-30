import React from "react";
import { ThirdwebProvider, useContract, useUnclaimedNFTs, Web3Button} from "@thirdweb-dev/react";
import LiveCodeEditor from "../../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useUnclaimedNFTs, Web3Button };

const code = `function App() {
    const { contract } = useContract("0x436492DBc2E30E56FaC8F2297BD1964833c0687d");
    const { data, isLoading, error } = useUnclaimedNFTs(contract);
  
    return (
        <div style={{ height: "550px", width: "650px", overflow: "auto" }}>
          {data && (
            <div>
              {data.map((item) => (
                <div key={item.id}>
                  <p>Name: {item.name}</p>
                  <p>Description: {item.description}</p>
                  <img src={item.image} alt="NFT" 
                  style={{ maxWidth: "300px" }}/>
                  <p>External URL: {item.external_url}</p>
                  <p>Animation URL: {item.animation_url}</p>
                  <p>Background Color: {item.background_color}</p>
                  <p>ID: {item.id}</p>
                  <p>URI: {item.uri}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }`;

export default function UseUnclaimedNFTs() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
