import React from "react";
import {
    ThirdwebProvider,
    useUpdateMetadata,
    useContract,
    Web3Button
} from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
    React, ThirdwebProvider,
    useUpdateMetadata,
    useContract,
    Web3Button
};

const code = `function App() {
    const { contract } = useContract("0xf4aef3201aaA673f424c671c19f36087aF541f8f");
    const {
      mutateAsync: updateMetadata,
      isLoading,
      error,
    } = useUpdateMetadata(contract);
  
    return (
      <Web3Button
        contractAddress="0xf4aef3201aaA673f424c671c19f36087aF541f8f"
        action={() =>
          updateMetadata({
            name: "My App",
            description: "My awesome Ethereum App",
            image: "/path/to/image.jpg", // URL, URI, or File object
            external_link: "https://myapp.com",
          })
        }
      >
        Update Metadata
      </Web3Button>
    );
  }`;

export default function UseUpdateMetadata() {
    return <LiveCodeEditor code={code} additionalScope={scope} />;
}
