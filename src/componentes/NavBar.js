import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import '../style.css';

const NavBar = () => {

    return (
        <div>
            <Navbar className="navBar">
                <Navbar.Brand>
                    <h1>Covid19 Rastreador by RE-ON</h1>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavBar;
