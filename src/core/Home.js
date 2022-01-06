import React from 'react'
import DoctorImage from '../images/doctor.jpg'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import {Row, 
    Col, 
    Button,
    Card} from 'react-bootstrap';

const Home = () => {
    
    return (
        <div className="container home-container mt-5">
            <Row>
                <Col xs={12} md={6}>
                    <h1 class="title">Book online</h1>
                    <p className="lead sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam accumsan, aliquet justo mattis, posuere ex. Aliquam erat volutpat. Vivamus efficitur libero vel lacus ultricies, sed euismod justo consequat.</p>
                    <Button variant="primary" className="button">Make an Appointment</Button>

                    <div className="home-card-container">
                        <Card className="header-cards" style={{ width: '18rem' }}>
                            <Card.Title className="card-title">Our Services</Card.Title>
                            <Card.Text className="card-subtitle">Lorem ipsum dolor sit amet, consectetur</Card.Text>
                            <div className="home-card-arrow-btn" style={{position: 'absolute'}}>
                                <IoIosArrowDroprightCircle />
                            </div>
                        </Card>
                        <Card className="header-cards" style={{ width: '18rem' }}>
                            <Card.Title className="card-title">Schedule</Card.Title>
                            <Card.Text>Mon-Fri <br />8 AM - 8PM</Card.Text>
                        </Card>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="home-image-container">
                        <img src={DoctorImage} alt="header-img" className="image-header-style" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home
