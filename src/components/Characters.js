import React from 'react'
import Char from './Char'
import '../css/Characters.css';

export default function Characters({characters}) {
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