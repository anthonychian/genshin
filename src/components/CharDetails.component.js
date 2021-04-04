//import React from 'react'
import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import axios from 'axios';

import Skill from './Skills.component'
import '../css/CharDetails.component.css'

export default function CharDetails({ match }) {
    let name = transformNameToURL(match.params.name)
    let charImgURL = `https://www.gensh.in/fileadmin/Database/Characters/${name}/charPortrait_${name}_XL.png`
    let url = "https://api.genshin.dev/characters/" + name;
    
    const [details, setDetails] = useState([])
    const [skills, setSkills] = useState([])
    

    useEffect(() => {
        axios.get(url)
        .then(res => {
          setDetails(res.data);
          console.log(res.data.skillTalents)
          setSkills(res.data.skillTalents.map(s => s))
        })
    }, [url])
    

    return (
        <Fade>
            <div className="characterContainer">
                <div className="character">
                    <img className="image"src={charImgURL}alt={name}/>

                    <div className="name">
                        {details.name}
                    </div>
                    <div className="vision">
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
                    </div>
                </div>
                <div className="skills">
                        {skills.map(s => (
                            <div key={s}>
                                <Skill skill={s} />
                            </div>
                        ))}
                </div>
            </div>
        </Fade>
    )
}


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