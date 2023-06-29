import React from "react";
import { ThirdwebProvider, useContract, useMetadata} from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useMetadata };

const code = `function App() {
    const { contract } = useContract("0x436492DBc2E30E56FaC8F2297BD1964833c0687d");
    const { data, isLoading, error } = useMetadata(contract);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (data) {
      const { name, description, image, external_link } = data;
  
      return (
        <div>
          <h1>{name}</h1>
          {description && <p>{description}</p>}
          {image && <img src={image} alt="Contract"
          style={{ maxWidth: "300px" }}/>}
          {external_link && <a href={external_link}>External Link</a>}
        </div>
      );
    }
  
    return null;
  }`;

export default function UseMetadata() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
