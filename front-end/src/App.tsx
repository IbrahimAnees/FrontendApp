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