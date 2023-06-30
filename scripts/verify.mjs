import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { CronosBeta } from "@thirdweb-dev/chains";

(async () => {
    const contractAddress = "0x04d14D8f3ef7c8ED8312fa5D26c62cD3bE66a491";
    const explorerAPIUrl = "https://api.cronoscan.com//api"; // e.g. https://api.etherscan.io/api
    const explorerAPIKey = "C8JPW5MND74XT9BXMP3PP4F9FHCTQP3FCD"; // Generate API key on the explorer


    const sdk = new ThirdwebSDK(CronosBeta);
    await sdk.verifier.verifyContract(
        contractAddress,
        explorerAPIUrl,
        explorerAPIKey
    );

    console.log(`Contract Verified`);
})();