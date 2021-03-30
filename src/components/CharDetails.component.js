import React, { useEffect } from 'react'
import '../css/CharDetails.component.css'
// import {useParams} from 'react-router-dom'

export default function CharDetails({ match }) {
    let name = transformNameToURL(match.params.name)
    let charImgURL = `https://www.gensh.in/fileadmin/Database/Characters/${name}/charPortrait_${name}_XL.png`
    
    useEffect(() => {
        console.log(match)
        console.log('Hi')
    }, [match])

    return (
        <div >
            <img className="image"src={charImgURL}alt={name}/>
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