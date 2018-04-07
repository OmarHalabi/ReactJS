import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


export default class CustomNavbar extends Component{
    render() {
        return(
            <Navbar defult collapseOnselect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src="assets/oxygen_logo.png" alt="Logo"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventkey={1} componentClass={Link} href="/" to="/">
                            Home    
                        </NavItem>
                        <NavItem eventkey={2} componentClass={Link} href="/about" to="/about">
                            About US  
                        </NavItem>
                        <NavItem eventkey={3} componentClass={Link} href="/services" to="/services">
                            SERVICES    
                        </NavItem>
                        <NavItem eventkey={4} componentClass={Link} href="/contact" to="/contact">
                            Contact   
                        </NavItem>
                    </Nav>    
                </Navbar.Collapse>        
            </Navbar>    
        )
    }
}
