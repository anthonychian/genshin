import React from 'react'
import '../css/Skills.component.css';

export default function Skill({skill}) {
    return (
        <div className="skillContainer">
            <div className="skillName">
            {skill.name}
            </div>
            <div className="skillDesc">
                {skill.description}
            </div>
        </div>
    )
}
