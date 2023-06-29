import React from "react";
import { ThirdwebProvider, useResolvedMediaType} from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useResolvedMediaType };

const code = `function App() {
    const { url, mimeType } = useResolvedMediaType(
      "https://bafybeiho45by6fkf3l7wuzavqod53aifrp4hme4meazx3hunlmbtstco7y.ipfs-public.thirdwebcdn.com/blue_circle.png", // URL or URI of the media asset
    );
  
    return <img src={url} type={mimeType} 
    style={{ maxWidth: "300px" }}/>;
  }`;

export default function UseResolveMediaType() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
