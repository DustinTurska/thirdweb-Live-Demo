import React from "react";
import {
    ThirdwebProvider, useLogin, Web3Button} from "@thirdweb-dev/react";
import LiveCodeEditor from "../../LiveCodeEditor";

const scope = {
    React, ThirdwebProvider, useLogin, Web3Button};

const code = `function App() {
    const { isLoading, login } = useLogin();
  
    return (
      <button onClick={() => login()}>
        {isLoading ? "Loading..." : "Sign in with Ethereum"}
      </button>
    );
  }`;

export default function UseLogin() {
    return <LiveCodeEditor code={code} additionalScope={scope} />;
}
