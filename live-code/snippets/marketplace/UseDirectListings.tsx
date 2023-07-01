import React from "react";
import {
  CurrencyValue,
  NFTMetadata,
  Status,
  ThirdwebProvider,
  useContract,
  useContractRead,
  useValidDirectListings,
  Web3Button,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
  React,
  useEffect,
  useState,
  ThirdwebProvider,
  useContract,
  useContractRead,
  useValidDirectListings,
  Web3Button,
};

type ListingData = {
  id: string;
  creatorAddress: string;
  assetContractAddress: string;
  tokenId: string;
  quantity: string;
  currencyContractAddress: string;
  currencyValuePerToken: CurrencyValue;
  pricePerToken: string;
  asset: NFTMetadata;
  startTimeInSeconds: number;
  endTimeInSeconds: number;
  isReservedListing: boolean;
  status: Status;
};

const code = `function App() {
  const { contract: marketplace, isLoading: loadingContract } = useContract(
    "0x14AC4F2339BAB55F8b8Fc89f89055D720142BF64",
    "marketplace-v3"
  );
  const { data: directListing, isLoading: loadingDirect } =
    useValidDirectListings(marketplace, { start: 0, count: 100 });

  return (
    <div>
      {/* Your app content goes here */}
      {((listing) => (
        <div key={listing.id}>
          <p>Listing ID: {listing.id}</p>
          {/* Render other properties as needed */}
        </div>
      ))}
    </div>
  );
}`;

export default function UseDirectListings() {
  return <LiveCodeEditor code={code} additionalScope={scope} 
    network=""
  />;
}