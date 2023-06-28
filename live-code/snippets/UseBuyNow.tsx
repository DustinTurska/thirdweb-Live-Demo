import React from "react";
import LiveCodeEditor from "../LiveCodeEditor";
import { Web3Button } from "@thirdweb-dev/react";

const scope = { Web3Button };

const code = `
<Web3Button
contractAddress="0xCE207c6Acb7E5D3cF333fdd344B6b38d930DCDd2"
action={(contract) => {
  contract.call("buyFromListing", [_listingId, _buyFor, _quantity, "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", _expectedTotalPrice])
}}
>
Buy Now
</Web3Button>`;

export default function BuyNow() {
    return <LiveCodeEditor code={code} additionalScope={scope}
        network="mumbai" />;
}
