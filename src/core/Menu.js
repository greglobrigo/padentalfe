import React from 'react'
import './index.css'
import {Link, withRouter} from 'react-router-dom'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import DentalLogo from '../images/dental_logo1.png'


const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {
            color: "#fff",
            background: 'blue',
            fontWeight: 'bold',
            borderRadius: '5px',
            paddingLeft: '0.5rem'
        }
    } else return {paddingLeft: '0.5rem'}
}


const Menu = ({history}) => {
    return (
        <div>
            <Navbar bg="light" expand="md">
                <Container fluid style={{gap: '0.3rem'}}>
                    <Navbar.Brand href="#home">
                        <img src={DentalLogo} alt="dental-clinic" className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                        <Link className="nav-link" style={isActive(history, '/patients')} to="/patients">Patients</Link>
                        <Link className="nav-link" style={isActive(history, '/services')} to="/services">Services</Link>
                        <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Sign In</Link>
                        <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Sign Up</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default withRouter(Menu)