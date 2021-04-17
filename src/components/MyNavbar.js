import React from 'react'
import '../css/MyNavbar.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function MyNavbar() {
    return (
        <div>
            <Navbar className="my-navbar" bg="dark" variant="dark">
                <Navbar.Brand className="brand-name" href="/">Genshin</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Characters</Nav.Link>
                        <Nav.Link href="/teams">Teams</Nav.Link>
                        <Nav.Link href="/tier-list">Tier List</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    )
}
// style={{height: "10vh"}} 