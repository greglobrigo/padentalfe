import React from 'react'
import './index.css'
import {Link, withRouter} from 'react-router-dom'
import {Navbar, Container, Nav, DropdownButton, Dropdown } from 'react-bootstrap'
import DentalLogo from '../images/dental_logo1.png'
import { signout, isAuthenticated } from '../auth'



const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {
            color: "#fff",
            // background: 'rgba(78,180,81,1)',
            borderBottom: '3px solid rgba(78,180,81,1)',
            textShadow: '2px 2px 8px #000',
            fontWeight: 'bold',
            borderRadius: '5px 20px 0px 20px',
            paddingLeft: '0.5rem'
        }
    } else return {paddingLeft: '0.5rem'}
}

const getNoDomainEmail = email => {
    let noDomainEmail = null;
    const pos = email.search('@'); // get position of domain
    if (pos > 0) {
      const emailDomain = email.slice(pos); // get domain name
      noDomainEmail = email.slice(0, -(emailDomain.length)); // use the slice method to remove domain name
    }
    return noDomainEmail;
};


const Menu = ({history}) => {



    const handleSignout = () => {
        signout(() => history.push('/'))
    }


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
                        {/* <Link className="nav-link" style={isActive(history, '/users')} to="/users">Users</Link> */}
                        <Link className="nav-link" style={isActive(history, '/services')} to="/services">Services</Link>
                        {isAuthenticated() && <Link className="nav-link" style={isActive(history, '/appointments')} to="/appointments">My Appointments</Link> }
                        {isAuthenticated() && <Link className="nav-link" style={isActive(history, '/appointments/new')} to="/appointments/new">Schedule New Appointment</Link> }
                        {isAuthenticated() ?
                        <div className="accounts">
                            {/* <Link className="nav-link" style={isActive(history, '/signout')} to="/signin">Sign out</Link> */}
                            <DropdownButton align="end" title={`Hi ${isAuthenticated().patient_email ? getNoDomainEmail(isAuthenticated().patient_email) : 'Admin'}`}id="dropdown-menu-align-end">
                                {/* <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider /> */}
                                <Dropdown.Item eventKey="4"><Link className="nav-link" style={isActive(history, '/signup'), {cursor: 'pointer', paddingLeft: '0.5rem'}} onClick={() => handleSignout('signout')}>Sign out</Link></Dropdown.Item>
                            </DropdownButton>
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