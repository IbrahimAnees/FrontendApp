import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('')
  const [nameEntered, setName] = useState("");

  const getQuote = () => {
    axios.get('https://api.agify.io?name=' + nameEntered)
    .then(res => {
      if (res.data.age !== null) {      console.log(res.data.age)
        setQuote(res.data.age)}
      else {
        setQuote('Not a valid name!')
      }
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="App">

<input
          type="text"
          id="pokemon-name"
          name="pokemon-name"
          onChange={(e) => setName(e.target.value)}
        />

      <button onClick={getQuote}>Get Quote</button>
      { quote && <p>{quote}</p> }
    </div>
  );
}

 export default App;

// import axios from "axios";
// import { useState } from "react";
// import "./App.css";

// function App() {
//   // Declare a new state variable, which we'll call "pokemonName"
//   const [pokemonName, setPokemonName] = useState("");
//   const [pokemonInfo, setPokemonInfo] = useState<undefined | any>(undefined);

//   const POKEMON_BASE_API_URL = "https://dog.ceo/api/breed/";
//   return (
//     <div>
//       <h1>Pokemon Search</h1>

//       <div>
//         <label>Pokemon Name</label>
//         <br />
//         <input
//           type="text"
//           id="pokemon-name"
//           name="pokemon-name"
//           onChange={(e) => setPokemonName(e.target.value)}
//         />
//         <br />
//         <button onClick={search}>Search</button>
//       </div>

//       <p>You have entered {pokemonName}</p>

//       {pokemonInfo === undefined ? (
//         <p>Pokemon not found</p>
//       ) : (
//         <div id="pokemon-result">
//           <img src={pokemonInfo.message[0]} />
//         </div>
//       )}
//     </div>
//   );

//   function search() {
//     axios.get(POKEMON_BASE_API_URL + pokemonName + "/images/random").then((res) => {
//       setPokemonInfo(res);
//     });
//   }
// }

// export default App;