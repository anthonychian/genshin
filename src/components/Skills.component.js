import React, { useState, useRef, useEffect} from 'react';
import '../css/Skills.component.css';

export default function Skill({skill}) {

    const [showDesc, setShowDesc] = useState(false);

    function handleShowDesc() {
        setShowDesc(!showDesc)
    }

    const textRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        if (textRef.current.scrollHeight <= textRef.current.offsetHeight) {
            buttonRef.current.hidden = true
        }
    }, [])

    return (
        <div className="skillContainer">
            <div className="skillName">
            {skill.name}
            </div>
            {!showDesc && <div ref={textRef} className="skillDescLess">
                {skill.description}
            </div>}
            {!showDesc && <button ref={buttonRef} className="viewSkill" onClick={handleShowDesc}>View More</button>}
            {showDesc && <div className="skillDescMore">
                {skill.description}
            </div>}
            {showDesc && <button className="viewSkill" onClick={handleShowDesc}>View Less</button>}
        </div>
    )
}
