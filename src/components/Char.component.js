import React, { useState } from 'react'
import  {Link} from 'react-router-dom'
import Bounce from 'react-reveal/Bounce'
import Pulse from 'react-reveal/Pulse'


import '../css/Char.component.css';

export default function Char({char}) {
    

    const [hover, setHover] = useState(false);

    function handleMouseHover() {
        setHover(!hover);
    }
    
    const url = "https://rerollcdn.com/GENSHIN/Characters/" + transformNameToURL(char) + ".png"
    const link = `/characters/${char}`
    const displayName = transformNameToDisplay(char)
    return (
        <Bounce>
            <div
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}>
                {
                hover && <div className="item-container">
                    <Pulse>
                        <Link to={link}>
                            <img className="grid-item"src={url} alt={char}/>
                        </Link>
                        <Link to={link}>
                            <div className="characterName">{displayName}</div>
                        </Link>
                    </Pulse>
                </div>
                }
                {
                !hover && <div className="item-container">
                    <Link to={link}>
                        <img className="grid-item"src={url} alt={char}/>
                    </Link>
                    <Link to={link}>
                        <div className="characterName">{displayName}</div>
                    </Link>
                </div>
                }
            </div>
        </Bounce>
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
            res += "%20"
        }
        else if (char.charAt(i) === "-") {
            res += "%20"
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
function transformNameToDisplay(char) {
    let res = ""
    let prev
    if (char === "traveler-anemo") return "Traveler (Anemo)"
    if (char === "traveler-geo") return "Traveler (Geo)"
    for (let i = 0; i < char.length; i++) {
        if (i === 0) {
            res += char.charAt(i).toUpperCase();
        }
        else if (char.charAt(i) === "-") {
            res += " "
        }
        else {
            if (prev === "-")
                res += char.charAt(i).toUpperCase();
            else {
                res += char.charAt(i)
            }
        }
        prev = char.charAt(i)
    }
    return res;
}
