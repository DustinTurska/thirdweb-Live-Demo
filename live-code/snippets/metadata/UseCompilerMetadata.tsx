import React from "react";
import {
    ThirdwebProvider,
    useCompilerMetadata
} from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
    React, ThirdwebProvider,
    useCompilerMetadata
};

const code = `function App() {
    const { data, isLoading, error } = useCompilerMetadata(contractAddress);
  }
  
  export default App;`;

export default function UseCompilerMetadata() {
    return <LiveCodeEditor code={code} additionalScope={scope} />;
}
