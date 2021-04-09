import React, { useState } from 'react';
import '../css/Skills.component.css';

export default function Skill({skill}) {

    const [showDesc, setShowDesc] = useState(false);

    function handleShowDesc() {
        setShowDesc(!showDesc)
    }

    return (
        <div className="skillContainer">
            <div className="skillName">
            {skill.name}
            </div>
            {!showDesc && <div className="skillDescLess">
                {skill.description}
            </div>}
            {!showDesc && <button className="viewSkill" onClick={handleShowDesc}>View More</button>}
            {showDesc && <div className="skillDescMore">
                {skill.description}
            </div>}
            {showDesc && <button className="viewSkill" onClick={handleShowDesc}>View Less</button>}
        </div>
    )
}
