import { useState } from "react";
import "./App.css";
import Input, { base64FileConverter } from "./input";

function App() {
  const [file, setFile] = useState(null);
  const handleSubmitFile = async () => {
    if (!file) alert("Please select a file");
    const reqURL = "http://localhost:5000";
    try {
      const res = await fetch(reqURL, {
        method: "POST",
        body: {
          file: await base64FileConverter(file),
          file_name: file.name,
        },
        headers: {
          "Content-Type": "application/json",
          "Cross-Origin-Opener-Policy": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        },
      });
      console.log(res, "asasaszssasas");
      const data = await res.json();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App p-[1rem]">
      <header className="text-[40px] text-blue-400">
        File Uploader, Text extracter!
      </header>
      <div className="flex w-[50%] justify-between mt-[3rem] ">
        <Input file={file} setFile={setFile} />
        <button
          onClick={handleSubmitFile}
          type="button"
          className="rounded text-[14px] w-[120px] bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Fetch
        </button>
      </div>
      <div className="flex flex-col justify-start items-start mt-[10rem]">
        <h2 className="text-[24px] font-[500]">List of extracted here!</h2>
        <div className="h-[400px]">
          <div className="overflow-y-scroll"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
