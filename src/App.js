import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    setResult(res.data.data[0].url);
    console.log("esto es promtp ->", prompt);
    console.log("esto es result ->", result);
    axios.post("http://localhost:8082/api/concepts", {
      title: prompt,
      img: result,
    });
  };

  return (
    <div className="app-main">
      <>
        <h2>Generate an Image using Open AI API</h2>

        <textarea
          className="app-input"
          placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="40"
        />
        <button onClick={generateImage}>Generate an Image</button>

        <div>
          {result.length > 0 ? (
            <img className="result-image" src={result} alt="result" />
          ) : (
            <></>
          )}
        </div>
      </>
    </div>
  );
}

export default App;
