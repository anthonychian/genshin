//import React from 'react'
import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import axios from 'axios';

// import CharMenu from './CharMenu.component'
import Constellations from './Constellations.component'
import Skill from './Skills.component'
import '../css/CharDetails.component.css'

export default function CharDetails({ match }) {
    let name = transformNameToURL(match.params.name)
    let charImgURL = "https://api.genshin.dev/characters/" + match.params.name + "/portrait";
    let url = "https://api.genshin.dev/characters/" + name;
    
    const [details, setDetails] = useState([])
    const [constellations, setConstellations] = useState([])
    const [skills, setSkills] = useState([])

    const [attVisible, setAtt] = useState(true);
    const [weaVisible, setWea] = useState(false);
    const [artVisible, setArt] = useState(false);
    const [conVisible, setCon] = useState(false);
    const [talVisible, setTal] = useState(false);

    function handleAttClick() {
        setAtt(true)
        setWea(false)
        setArt(false)
        setCon(false)
        setTal(false)
    }
    function handleWeaClick() {
        setAtt(false)
        setWea(true)
        setArt(false)
        setCon(false)
        setTal(false)
    }
    function handleArtClick() {
        setAtt(false)
        setWea(false)
        setArt(true)
        setCon(false)
        setTal(false)
    }
    function handleConClick() {
        setAtt(false)
        setWea(false)
        setArt(false)
        setCon(true)
        setTal(false)
    }
    function handleTalClick() {
        setAtt(false)
        setWea(false)
        setArt(false)
        setCon(false)
        setTal(true)
    }
    
    useEffect(() => {
        axios.get(url)
        .then(res => {
          setDetails(res.data);
          //console.log(res.data.skillTalents)
          setConstellations(res.data.constellations.map(s => s))
        })
    }, [url])

    useEffect(() => {
        axios.get(url)
        .then(res => {
          setDetails(res.data);
          //console.log(res.data.skillTalents)
          setSkills(res.data.skillTalents.map(s => s))
        })
    }, [url])
    

    return (
        <Fade>
            <div className="characterContainer">
                
                <div className="menu">
                    <button onClick={handleAttClick}className="attributes">
                        Attributes
                    </button>
                    <button onClick={handleWeaClick} className="weapons">
                        Weapons
                    </button>
                    <button onClick={handleArtClick} className="artifacts">
                        Artifacts
                    </button>
                    <button onClick={handleConClick} className="constellations">
                        Constellations
                    </button>
                    <button onClick={handleTalClick} className="talents">
                        Talents
                    </button>
                </div>

                <div className="character">
                    <img className="image"src={charImgURL}alt={name}/>
                    <div className="name">
                        {details.name}
                    </div>
                </div>

                {attVisible && <div>Attributes</div>}
                {weaVisible && <div>Weapons</div>}
                {artVisible && <div>Artifacts</div>}
                {conVisible && <div className="const">
                    {constellations.map(a => (
                            <div key={a}>
                                <Constellations constellation={a} />
                            </div>
                        ))}
                    </div>}
                {talVisible && <div className="skills">
                    {skills.map(s => (
                        <div key={s}>
                            <Skill skill={s} />
                        </div>
                    ))}
                </div>}

            </div>
        </Fade>
    )
}
/* <div className="vision">
    {details.vision}
</div>
<div className="weapon">
    {details.weapon}
</div>
<div className="affiliation">
    {details.affiliation}
</div>
<h1 className="rarity">
    {details.rarity}
</h1>
<div className="desc">
    {details.description}
</div>  */


function transformNameToURL(char) {
    let res = ""
    let prev
    if (char === "traveler-anemo") return "Traveler%20(Anemo)"
    if (char === "traveler-geo") return "Traveler%20(Geo)"
    for (let i = 0; i < char.length; i++) {
        if (i === 0) {
            res += char.charAt(i).toUpperCase();
        }
        else if (char.charAt(i)=== " ") {
            res += "+"
        }
        else if (char.charAt(i) === "-") {
            res += "+"
        }
        else {
            if (prev === "-" || prev === " ")
                res += char.charAt(i).toUpperCase();
            else {
                res += char.charAt(i)
            }
        }
        prev = char.charAt(i)
    }
    return res;
}