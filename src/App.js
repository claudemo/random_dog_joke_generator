import "./App.css";
import { useState } from "react";

function App() {
  const [Image, setImage] = useState("");
  const [Joke, setJoke] = useState("");
  const [Punchline, setPunchline] = useState("");

  function generateImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImage(data.message);
      });
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.setup);
        setPunchline(data.punchline);
      });
  }

  return (
    <div>
      <h1>Dog Meme Generator</h1>
      <button onClick={generateImage}>Generate</button>
      <div>
        <p>{Joke}</p>
        <img src={Image} alt="dog" />
        <p>{Punchline}</p>
      </div>
    </div>
  );
}

export default App;
