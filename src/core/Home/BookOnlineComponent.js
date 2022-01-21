import React from 'react'
import {Row, Col, Button, Card} from 'react-bootstrap';
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import DoctorImage from '../../images/30.jpg'
import {Link} from 'react-router-dom'


const BookOnlineComponent = () => {
    return (
        <div className="container home-container home-container-margin">
                <Row>
                    <Col className="home-first-section" xs={12} lg={6}>
                        <h1 className="title">Book online</h1>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam accumsan, aliquet justo mattis, posuere ex. Aliquam erat volutpat. Vivamus efficitur libero vel lacus ultricies, sed euismod justo consequat.</p>
                        <Link to="/appointments/new"><Button variant="primary" className="button">Make an Appointment</Button></Link>

                        <div className="home-card-container">
                            <Card className="header-cards" style={{ width: '18rem' }}>
                                <Card.Title className="card-title">Our Services</Card.Title>
                                <Card.Text className="card-subtitle">Lorem ipsum dolor sit amet, consectetur</Card.Text>
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
                            <img src={DoctorImage} alt="header-img" className="image-header-style" />
                        </div>
                    </Col>
                </Row>
            </div>
    )
}

export default BookOnlineComponent
