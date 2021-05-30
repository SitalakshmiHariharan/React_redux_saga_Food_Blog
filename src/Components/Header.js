import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'

const Header =()=>{
    return (
        <div>
            <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">FOOD MANTRA</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/foods">Foods</Nav.Link>            
            </Nav>
            </Navbar> 
        </div>
    )
}

export default Header