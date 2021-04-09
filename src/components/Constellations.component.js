import React, { useState, useRef} from 'react';
import '../css/Constellations.component.css';

export default function Constellations({constellation}) {
    const [showConst, setShowConst] = useState(false);

    function handleShowDesc() {
        setShowConst(!showConst)
    }

    const textRef = useRef();

    function isOverflow(element) {
        if (element.scrollHeight > element.offsetHeight) {
            return true;
        }
        return false;
    }

    return (
        <div className="constContainer">
            <div className="constName">
                {constellation.name}
            </div>

            {!showConst && <div ref={textRef} className="constDescLess">
                {constellation.description}
            </div>}

            {!showConst && isOverflow(textRef) && <button className="viewConst" onClick={handleShowDesc}>View More</button>}
            
            {showConst && <div className="constDescMore">
                {constellation.description}
            </div>}
            
            {showConst && <button className="viewConst" onClick={handleShowDesc}>View Less</button>}

        </div>
    )
}

