import React from "react";
import LiveCodeEditor from "../../LiveCodeEditor";
import { Web3Button } from "@thirdweb-dev/react";

const scope = { Web3Button };

const code = `<Web3Button
  contractAddress="0x8Da37534C58D94E338D0b6D57afF34af6CDc2E32"
  action={(contract) => contract.erc721.claim(1)}
  theme="dark"
>
  Claim an NFT!
</Web3Button>`;

export default function UseWeb3Button() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}
