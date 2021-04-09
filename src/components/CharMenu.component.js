import React from 'react'

import '../css/CharMenu.component.css'

export default function CharMenu() {

    return (
        <div className="menu">
            <button className="attributes">
                Attributes
            </button>
            <button className="weapons">
                Weapons
            </button>
            <button className="artifacts">
                Artifacts
            </button>
            <button className="constellations">
                Constellations
            </button>
            <button className="talents">
                Talents
            </button>
        </div>
    )
}
