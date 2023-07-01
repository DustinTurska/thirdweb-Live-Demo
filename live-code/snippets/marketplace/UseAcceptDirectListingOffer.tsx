import React from "react";
import {
    ThirdwebProvider,
    useAcceptDirectListingOffer,
    useContract,
    useContractRead,
    Web3Button,
  } from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
    React, ThirdwebProvider,
    useAcceptDirectListingOffer,
    useContract,
    useContractRead,
    Web3Button,
};

const code = `function App() {
    const { contract } = useContract("0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64");
    const { data, isLoading } = useContractRead(contract, "getOffer", [0]);
  
    let offer = null;
    let listing = null;
  
    if (!isLoading && data) {
      offer = data.offer; // Assuming the contract's getOffer() function returns an object with a property named 'offer'
      listing = data.listing; // Assuming the contract's getOffer() function returns an object with a property named 'listing'
    }
  
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>Offer: {offer}</p>
            <p>Listing: {listing}</p>
            <Web3Button
              contractAddress="0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64"
              action={() =>
                acceptDirectOffer({
                  listingId: "0",
                  addressOfOfferor: "{{offeror_address}}",
                })
              }
            >
              Accept Offer
            </Web3Button>
          </>
        )}
      </div>
    );
  }`;

export default function UseAcceptDirectListingOffer() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}