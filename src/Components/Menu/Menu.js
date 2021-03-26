import React from 'react';
import './index.css'
import { Navbar, Nav, Button } from 'react-bootstrap';

export const Menu = () => {
    return (
        <Navbar bg="light" variant="light" className="menu_home">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav className="navbar-nav ml-auto">
                <Nav.Link className="mx-2 sub fonts" href="#home">Home</Nav.Link>
                <Nav.Link className="mx-2 sub fonts" href="#features">Features</Nav.Link>
                <Button className="mx-2 fonts button">Login</Button>
            </Nav>
        </Navbar>
    );
}
