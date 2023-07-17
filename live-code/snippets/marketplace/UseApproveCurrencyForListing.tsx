import React, { useState } from "react";
import { ethers } from "ethers";

export default function Component({ provider }) {
  const [csvFile, setCsvFile] = useState(null);
  const [tokenAmount, setTokenAmount] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);
  };

  const handleButtonClick = async (contract) => {
    if (csvFile) {
      const fileReader = new FileReader();
      fileReader.onload = async (event) => {
        const contents = event.target.result;
        const csvData = contents.split("\n");
        const addresses = [];
        const values = [];

        csvData.forEach((row) => {
          const [to, value] = row.split(",");

          const trimmedTo = to.trim();
          const trimmedValue = value.trim();

          values.push(trimmedValue);
          addresses.push(trimmedTo);
        });

        const signer = provider.getSigner();

        const transaction = await signer.sendTransaction({
          to: contract.address,
          value: ethers.utils.parseEther(tokenAmount),
          data: contract.interface.encodeFunctionData(
            "mutiSendETHWithDifferentValue",
            [addresses, values]
          ),
        });

        await transaction.wait();
        console.log("Transaction completed!");
      };

      fileReader.readAsText(csvFile);
    }
  };

  const downloadExampleCSV = () => {
    const csvData = `...`;

    const element = document.createElement("a");
    const file = new Blob([csvData], { type: "text/csv" });
    element.href = URL.createObjectURL(file);
    element.download = "example.csv";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <input
        type="number"
        step="any"
        placeholder="Token Amount"
        value={tokenAmount}
        onChange={(e) => setTokenAmount(e.target.value)}
      />
      <button onClick={() => handleButtonClick(contract)}>Submit</button>
      <p>
        <a href="#" onClick={downloadExampleCSV}>
          Download example.csv
        </a>
      </p>
    </div>
  );
}
