import React from "react";
import { ThirdwebProvider, useContract, useLazyMint, Web3Button} from "@thirdweb-dev/react";
import LiveCodeEditor from "../../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useLazyMint, Web3Button };

const code = `function App() {
    const { contract } = useContract("0x5907C77D0b413304667d1764b479ED70eF659e52");
    const { mutateAsync: lazyMint, isLoading, error } = useLazyMint(contract);
  
    return (
      <Web3Button
        contractAddress="0x5907C77D0b413304667d1764b479ED70eF659e52"
        action={() =>
          lazyMint({
            // Metadata of the NFTs to upload
            metadatas: [
              {
                name: "thirdweb",
                description: "hello web3",
                image: "https://bafybeibd3p4wruv4rk4n2xqoozi5xedia32yjkj5jfidyv7p4iskyoe2ha.ipfs-public.thirdwebcdn.com/183095154-2578c28b-1dac-4ffd-9f4b-14eb85657b68.png",
              },
            ],
          })
        }
        theme="dark"  
        onError={(error) => alert("Something went wrong!")}
        onSuccess={(result) => alert("Yay! You've lazy minted an NFT! 🥳")}
      >
        Lazy Mint NFTs
      </Web3Button>
    );
  }`;

export default function UseLazyMint() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
