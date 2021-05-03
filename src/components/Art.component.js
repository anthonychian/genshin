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
      <>
        {(details.max_rarity === 5) && <div className="artifact"> 
          <img className="artIcon"src={icon} alt={art}/>
        </div>}

        {(details.max_rarity === 5) && <div className="artText"> 
          <div className="artName">
            {details.name}
          </div>
          <div className="artBonus">
            2-Piece Bonus
          </div>
          <div className="art2Passive">
            {details['2-piece_bonus']}
          </div>
          <div className="artBonus">
            4-Piece Bonus
          </div>
          <div className="art4Passive">
          {details['4-piece_bonus']}
          </div>
        </div>}
      </>
    )
}