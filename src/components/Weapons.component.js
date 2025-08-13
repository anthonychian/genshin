import React, { useState, useEffect } from "react";
import axios from "axios";

import Weap from "./Weap.component";
import "../css/Weapons.component.css";

export default function Weapons({ type }) {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    axios.get("https://genshin.jmp.blue/weapons").then((res) => {
      setWeapons(res.data.map((c) => c));
    });
  }, []);

  return (
    <>
      <div className="grid-container-weapons">
        {weapons.map((c) => (
          <Weap weap={c} type={type} />
        ))}
      </div>
    </>
  );
}
