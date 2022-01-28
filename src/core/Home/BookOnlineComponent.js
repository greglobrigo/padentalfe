import React from 'react'
import {Row, Col, Button, Card} from 'react-bootstrap';
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import DoctorImage from '../../images/30.jpg'
import {Link} from 'react-router-dom'
import {isAuthenticated} from '../../auth'


const BookOnlineComponent = () => {
    return (
        <div className="container home-container home-container-margin">
                <Row>
                    <Col className="home-first-section" xs={12} lg={6}>
                        <h1 className="title">Your Dental Healthcare partner, in the heart of Albay.</h1>
                        <p className="sub-title" style={{fontSize: '1.5rem', fontWeight: 'bold'}}></p>
                        <p className="sub-title sub-title-home">Booking appointments made easy!<br></br>You may register and fill up an appointment form online.</p>                        
                        {isAuthenticated().admin_email ? <Link to="/appointments"><div className="button-container"><Button variant="primary" className="button">My Appointments</Button></div></Link>
                        : <Link to="/appointments/new"><div className="button-container"><Button variant="primary" className="button">Make an Appointment</Button></div></Link>}                       
                        <div className="home-card-container">
                            <Card className="header-cards" style={{ width: '18rem' }}>
                                <Card.Title className="card-title">Our Services</Card.Title>
                                <Card.Text className="card-subtitle">We offer a wide array of dental services from general checkups, tooth extraction to tooth restoration.</Card.Text>
                                <div className="home-card-arrow-btn pulse" style={{position: 'absolute'}}>
                                    <Link to="/services"><IoIosArrowDroprightCircle style={{color: 'rgba(78, 180, 81, 1)'}}/></Link>
                                </div>
                            </Card>
                            <Card className="header-cards" style={{ width: '18rem' }}>
                                <Card.Title className="card-title">Schedule</Card.Title>
                                <Card.Text>Mon-Sat <br />9:00AM - 5:00PM</Card.Text>
                                {/* <div className="home-card-arrow-btn pulse" style={{position: 'absolute'}}>
                                    <IoIosArrowDroprightCircle />
                                </div> */}
                            </Card>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="home-image-container">
                            <img src={DoctorImage} alt="header-img" className="image-header-style"  loading="eager"/>
                        </div>
                    </Col>
                </Row>
            </div>
    )
}

export default BookOnlineComponent
