import React from 'react'
import './index.css'
import {Link, withRouter} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap'
import DentalLogo from '../images/dental_logo1.png'
import { signout, isAuthenticated } from '../auth'


const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {
            color: "#fff",
            background: 'rgba(78,180,81,1)',
            fontWeight: 'bold',
            borderRadius: '5px 20px 5px 20px',
            paddingLeft: '0.5rem'
        }
    } else return {paddingLeft: '0.5rem'}
}


const Menu = ({history}) => {

    console.log(isAuthenticated())
    return (
        <div>
            <Navbar bg="light" expand="md">
                <Container fluid style={{gap: '0.3rem'}}>
                    <Navbar.Brand href="/">
                        <img src={DentalLogo} alt="dental-clinic" className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{width: '100%'}}>
                        <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                        <Link className="nav-link" style={isActive(history, '/users')} to="/users">Users</Link>
                        <Link className="nav-link" style={isActive(history, '/services')} to="/services">Services</Link>
                        {isAuthenticated() && <Link className="nav-link" style={isActive(history, '/appointments')} to="/appointments">Appointments</Link> }
                        {!isAuthenticated().admin_email && <Link className="nav-link" style={isActive(history, '/transaction-history')} to="/transaction-history">Transaction History</Link>}
                        {isAuthenticated() && <Link className="nav-link" style={isActive(history, '/appointment-history')} to="/appointment-history">Appointment History</Link>}
                        {isAuthenticated() ?
                        <div className="accounts">
                            {/* <Link className="nav-link" style={isActive(history, '/signout')} to="/signin">Sign out</Link> */}
                            <span className="nav-link" style={isActive(history, '/signup'), {cursor: 'pointer'}} onClick={() => signout(() => history.push('/'))}>Sign Out</span>
                        </div>
                        :
                        <>
                            <div className="accounts">
                                <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Sign In</Link>
                                <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Register</Link>
                            </div>
                        </> 
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default withRouter(Menu)