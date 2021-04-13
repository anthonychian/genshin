//import React from 'react'
import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import axios from 'axios';

// import CharMenu from './CharMenu.component'
import Constellations from './Constellations.component'
import Skill from './Skills.component'
import '../css/CharDetails.component.css'

export default function CharDetails({ match }) {
    let charImgURL = "https://api.genshin.dev/characters/" + match.params.name + "/portrait";
    let visionImgURL = "https://api.genshin.dev/elements/";
    let url = "https://api.genshin.dev/characters/" + match.params.name;
    
    const [details, setDetails] = useState([])
    const [constellations, setConstellations] = useState([])
    const [skills, setSkills] = useState([])
    const [vision, setVision] = useState([]);

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
          setVision(res.data.vision.toLowerCase())
          setConstellations(res.data.constellations.map(s => s))
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
                    <img className="image"src={charImgURL}alt={details.name}/>
                    <div className="name">
                        {details.name}
                    </div>
                </div>
                
                {attVisible && <Fade><div className="att">
                    <div className="visionText">
                        <img className="visionImg"src={visionImgURL + vision + "/icon"}alt={vision}/>
                        {details.vision}
                    </div>
                    <div className="desc">{details.description}</div>
                </div></Fade>}

                {weaVisible && <Fade><div>
                    <div className="weaponText">
                        {details.weapon}
                    </div>
                </div></Fade>}

                {artVisible && <Fade><div>
                    <div className="artifactText">
                        Artifact
                    </div>
                </div></Fade>}

                {conVisible && <Fade><div className="const">
                    {constellations.map(a => (
                        <div key={a}>
                            <Constellations constellation={a} />
                        </div>
                    ))}
                </div></Fade>}

                {talVisible && <Fade><div className="skills">
                    {skills.map(s => (
                        <div key={s}>
                            <Skill skill={s} />
                        </div>
                    ))}
                </div></Fade>}

            </div>
        </Fade>
    )
}