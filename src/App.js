import React, { useState } from 'react';
import Characters from './components/Characters'
import MyNavbar from './components/MyNavbar'
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([])

  axios.get("https://api.genshin.dev/characters")
  .then(res => {
    setCharacters(res.data.map(c => c))
  })

  return (
    <>
    <MyNavbar/>
    <div className="App">
      
      <Characters characters={characters} />
    </div>
    </>
  );
}

export default App;
