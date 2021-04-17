import React, { useState, useEffect} from 'react';
import axios from 'axios';

import Art from './Art.component'
import '../css/Artifacts.component.css';

export default function Artifacts() {
    const [artifacts, setArtifacts] = useState([])

    useEffect(() => {
        axios.get("https://api.genshin.dev/artifacts")
        .then(res => {
            setArtifacts(res.data.map(c => c))
        })
      }, [])

    return (
        <>
            <div className="grid-container-artifacts">
                {artifacts.map(c => (
                    <Art art={c}/>
                ))}
            </div>
        </>
    )
}
