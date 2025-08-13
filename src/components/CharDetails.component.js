//import React from 'react'
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

// import CharMenu from './CharMenu.component'
import Artifacts from "./Artifacts.component";
import Weapons from "./Weapons.component";
import Constellations from "./Constellations.component";
import Skill from "./Skills.component";
import "../css/CharDetails.component.css";

export default function CharDetails({ match }) {
  let charImgURL =
    "https://genshin.jmp.blue/characters/" + match.params.name + "/portrait";
  let visionImgURL = "https://genshin.jmp.blue/elements/";
  let url = "https://genshin.jmp.blue/characters/" + match.params.name;

  const [details, setDetails] = useState([]);
  const [constellations, setConstellations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [vision, setVision] = useState([]);

  const contentRef = useRef();

  const [attVisible, setAtt] = useState(true);
  const [weaVisible, setWea] = useState(false);
  const [artVisible, setArt] = useState(false);
  const [conVisible, setCon] = useState(false);
  const [talVisible, setTal] = useState(false);

  function handleAttClick() {
    setAtt(true);
    setWea(false);
    setArt(false);
    setCon(false);
    setTal(false);
  }
  function handleWeaClick() {
    setAtt(false);
    setWea(true);
    setArt(false);
    setCon(false);
    setTal(false);
  }
  function handleArtClick() {
    setAtt(false);
    setWea(false);
    setArt(true);
    setCon(false);
    setTal(false);
  }
  function handleConClick() {
    setAtt(false);
    setWea(false);
    setArt(false);
    setCon(true);
    setTal(false);
  }
  function handleTalClick() {
    setAtt(false);
    setWea(false);
    setArt(false);
    setCon(false);
    setTal(true);
  }

  useEffect(() => {
    axios.get(url).then((res) => {
      setDetails(res.data);
      setVision(res.data.vision.toLowerCase());
      setConstellations(res.data.constellations.map((c) => c));
      setSkills(res.data.skillTalents.map((s) => s));
    });
  }, [url]);

  return (
    <div className="characterContainer">
      <div id="menu" className="menu">
        <button onClick={handleAttClick} className="attMenu">
          Attributes
        </button>
        <br />
        <button onClick={handleWeaClick} className="weaMenu">
          Weapons
        </button>
        <br />
        <button onClick={handleArtClick} className="artMenu">
          Artifacts
        </button>
        <br />
        <button onClick={handleConClick} className="constMenu">
          Constellations
        </button>
        <br />
        <button onClick={handleTalClick} className="talMenu">
          Talents
        </button>
      </div>

      <div id="character" className="character">
        <div className="name">{details.name}</div>
        <img className="image" src={charImgURL} alt={details.name} />
      </div>
      <div id="rightSide" ref={contentRef}>
        {attVisible && (
          <div className="att">
            <div className="visionText">
              <img
                className="visionImg"
                src={visionImgURL + vision + "/icon"}
                alt={vision}
              />
              {details.vision}
            </div>
            <div className="desc">{details.description}</div>
          </div>
        )}

        {weaVisible && (
          <div>
            <div className="weaponText">
              {details.weapon}
              <Weapons type={details.weapon} />
            </div>
          </div>
        )}

        {artVisible && (
          <div>
            <div className="artifactText">
              Artifacts
              <Artifacts />
            </div>
          </div>
        )}

        {conVisible && (
          <div className="const">
            {constellations.map((a) => (
              <div key={a}>
                <Constellations constellation={a} />
              </div>
            ))}
          </div>
        )}

        {talVisible && (
          <div className="skills">
            {skills.map((s) => (
              <div key={s}>
                <Skill skill={s} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
