import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/Char.component.css";

export default function Char({ char }) {
  const [hover, setHover] = useState(false);

  function handleMouseHover() {
    setHover(!hover);
  }
  const charIconURL = "https://genshin.jmp.blue/characters/" + char + "/icon";
  const link = `/characters/${char}`;
  const displayName = transformNameToDisplay(char);
  return (
    <div onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
      {hover && (
        <div className="item-container">
          <Link to={link}>
            <img className="grid-item" src={charIconURL} alt={char} />
          </Link>
          <Link to={link}>
            <div className="characterName">{displayName}</div>
          </Link>
        </div>
      )}
      {!hover && (
        <div className="item-container">
          <Link to={link}>
            <img className="grid-item" src={charIconURL} alt={char} />
          </Link>
          <Link to={link}>
            <div className="characterName">{displayName}</div>
          </Link>
        </div>
      )}
    </div>
  );
}

function transformNameToDisplay(char) {
  let res = "";
  let prev;
  if (char === "traveler-anemo") return "Traveler (Anemo)";
  if (char === "traveler-geo") return "Traveler (Geo)";
  for (let i = 0; i < char.length; i++) {
    if (i === 0) {
      res += char.charAt(i).toUpperCase();
    } else if (char.charAt(i) === "-") {
      res += " ";
    } else {
      if (prev === "-") res += char.charAt(i).toUpperCase();
      else {
        res += char.charAt(i);
      }
    }
    prev = char.charAt(i);
  }
  return res;
}
