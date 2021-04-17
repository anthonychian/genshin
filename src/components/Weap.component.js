import React, { useState, useEffect } from 'react'

import axios from 'axios'

import '../css/Weap.component.css';

export default function Weap({weap, type}) {
    
    let url = "https://api.genshin.dev/weapons/" + weap;
    let icon = "https://api.genshin.dev/weapons/" + weap + "/icon"
    const [details, setDetails] = useState([])
    useEffect(() => {
        axios.get(url)
        .then(res => {
          setDetails(res.data);
        })
    }, [url])

    return (
       (details.type === type) && <img className="weapIcon"src={icon} alt={weap}/>
            
    )
}