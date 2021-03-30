import React from 'react'
import '../css/MyNavbar.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function MyNavbar() {
    return (
        <div>
            <Navbar className="my-navbar" bg="dark" variant="dark">
                <Navbar.Brand className="brand-name" href="#home">Genshin</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Characters</Nav.Link>
                        <Nav.Link href="#features">Teams</Nav.Link>
                        <Nav.Link href="#pricing">Tier List</Nav.Link>
                    </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
// style={{height: "10vh"}} 