import React, { useState, useRef, useEffect} from 'react';
import '../css/Constellations.component.css';

export default function Constellations({constellation}) {
    const [showConst, setShowConst] = useState(false);

    function handleShowDesc() {
        setShowConst(!showConst)
    }

    const textRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        if (textRef.current.scrollHeight <= textRef.current.offsetHeight) {
            buttonRef.current.hidden = true
        }
    }, [])

    // function handleImageLoaded(e) {
    //     this.setState({ imageStatus: 'loaded' });
    //     console.log(e.target.scrollHeight);
    // }

    // function isOverflow(element) {
    //     if (element.current.scrollHeight > element.current.offsetHeight) {
    //         return true;
    //     }
    //     return false;
    // }

    return (
        <div className="constContainer">
            <div className="constName">
                {constellation.name}
            </div>

            {!showConst && <div ref={textRef} className="constDescLess">
                {constellation.description}
            </div>}

            {!showConst && <button ref={buttonRef} className="viewConst" onClick={handleShowDesc}>View More</button>}
            
            {showConst && <div className="constDescMore">
                {constellation.description}
            </div>}
            
            {showConst && <button className="viewConst" onClick={handleShowDesc}>View Less</button>}

        </div>
    )
}

