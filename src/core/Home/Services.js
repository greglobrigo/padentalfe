import React from 'react'
import {Row, Col, Button} from 'react-bootstrap';


const Services = () => {
    return (
        <div className="container home-container-margin">
            <Row className="services-row-container">
                <Col md={4}>
                    <h1 className="profession-clinic-subtitle">Services</h1>
                    <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam accumsan, aliquet justo mattis, posuere ex. Aliquam erat volutpat. Vivamus efficitur libero vel lacus ultricies, sed euismod justo consequat.</p>
                    <Button variant="primary" className="button">more services</Button>
                    <div className="services-card-container">
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Service 1</h5>
                            <div className="services-subtitle">lorem ipsum dolor sit amet, consectetur adip</div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="services-first-col-card-container">
                    <div className="services-card-container">
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Service 1</h5>
                            <div className="services-subtitle">lorem ipsum dolor sit amet, consectetur adip</div>
                        </div>
                    </div>
                    <div className="services-card-container">
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Service 1</h5>
                            <div className="services-subtitle">lorem ipsum dolor sit amet, consectetur adip</div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="services-second-col-card-container">
                    <div className="services-card-container">
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Service 1</h5>
                            <div className="services-subtitle">lorem ipsum dolor sit amet, consectetur adip</div>
                        </div>
                    </div>
                    <div className="services-card-container">
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Service 1</h5>
                            <div className="services-subtitle">lorem ipsum dolor sit amet, consectetur adip</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Services
