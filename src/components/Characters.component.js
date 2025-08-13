import React, { useState, useEffect } from "react";
import Char from "./Char.component";
import "../css/Characters.component.css";

import axios from "axios";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://genshin.jmp.blue/characters").then((res) => {
      setCharacters(res.data.map((c) => c));
    });
  }, []);

  return (
    <>
      <div className="title">Characters</div>
      <div className="grid-container">
        {characters.map((c) => (
          <div key={c}>
            <Char char={c} />
          </div>
        ))}
      </div>
    </>
  );
}
