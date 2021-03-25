import React from 'react'
import '../css/Char.css';
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

export default function Char({char}) {
    
    const url = "https://rerollcdn.com/GENSHIN/Characters/" + transformNameToURL(char) + ".png"

    return ( 
        <div className="grid-item">
            <img src={url} height="100px" width="100px" alt="character"></img>
            <div className="characterName">{char}</div>
        </div>
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
