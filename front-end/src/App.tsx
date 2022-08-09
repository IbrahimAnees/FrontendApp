import axios from "axios";
import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  const [digimonName, setDigimonName] = useState("");
  const [digimonPic, setPicURL] = useState<undefined | any>(undefined);

  const DIGIMON_BASE_API_URL = "https://digimon-api.vercel.app/api/digimon";
  return (
    <div style={{ color: "blue" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "darkgreen"}}> DIGIMON IMAGES </h1>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Enter the digimon's name:</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label>Examples: Koromon, Gabumon, Omnimon, Patamon </label>
        </div>
        <br></br>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            id="digimon-name"
            name="digimon-name"
            onChange={(e) => setDigimonName(e.target.value)}
          />
          <br />
          <Button onClick={searchForDigimon} variant="contained">
            Search
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>Digimon entered: {digimonName}</h3>
      </div>
      {digimonPic === undefined ? (
        <div style={{ display: "flex", justifyContent: "center" }}></div>
      ) : (
        <div
          id="digimon-result"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={digimonPic} />
        </div>
      )}
    </div>
  );

  function searchForDigimon() {
    axios
      .get(DIGIMON_BASE_API_URL + "/name/" + digimonName)
      .then((res) => {
        setPicURL(res.data[0].img);
        console.log(res.data[0].img);
      })
      .catch((err) => {
        setPicURL(
          "https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Dark-512.png"
        );
      });
  }
}

export default App;
