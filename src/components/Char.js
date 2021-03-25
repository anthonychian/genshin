import React from 'react'
import '../css/Char.css';

export default function Char({char}) {
    
    const url = "https://rerollcdn.com/GENSHIN/Characters/" + transformNameToURL(char) + ".png"
    const displayName = transformNameToDisplay(char)
    return ( 
        <div className="grid-item">
            <img src={url} alt="character"></img>
            <div className="characterName">{displayName}</div>
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
