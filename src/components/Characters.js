import React from 'react'
import Char from './Char'
import '../css/Characters.css';
//import Container from 'react-bootstrap/Container'

export default function Characters({characters}) {
    // let count = 0;
    return (
        <div className="grid-container">
            {characters.map(c => (
                <div key={c}>
                    <Char char={c} />
                </div>
            ))}
        </div>
       
    )
}
/* <div key={c}>{c}</div> */