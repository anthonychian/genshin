import React, { useState, useEffect } from 'react'

import axios from 'axios'

import '../css/Art.component.css';

export default function Weap({art}) {
    
    let url = "https://api.genshin.dev/artifacts/" + art;
    let icon = "https://api.genshin.dev/artifacts/" + art + "/flower-of-life"
    const [details, setDetails] = useState([])
    useEffect(() => {
        axios.get(url)
        .then(res => {
          setDetails(res.data);
        })
    }, [url])

    return (
       (details.max_rarity === 5) && <img className="artIcon"src={icon} alt={art}/>
            
    )
}