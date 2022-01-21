import React from 'react'
import {Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Doctor_1 from '../../images/2.jpg'
import Doctor_2 from '../../images/11.jpg'
import Doctor_3 from '../../images/37.jpg'
import Doctor_4 from '../../images/facility_13.jpg'
import Doctor_5 from '../../images/facility_3.jpg'


const Services = () => {
    return (
        <div className="container home-container-margin">
            <Row className="services-row-container">
                <Col md={4}>
                    <h1 className="profession-clinic-subtitle">Services</h1>
                    <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam accumsan, aliquet justo mattis, posuere ex. Aliquam erat volutpat. Vivamus efficitur libero vel lacus ultricies, sed euismod justo consequat.</p>
                    <Link to="/services"><Button variant="primary" className="button">more services</Button></Link>
                    <div className="services-card-container" style={{backgroundImage: `url(${Doctor_1})`}}>
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Dental Consultation</h5>
                            <div className="services-subtitle">lorem ipsum dolor sit amet, consectetur adip</div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="services-first-col-card-container">
                    <div className="services-card-container" style={{backgroundImage: `url(${Doctor_2})`}}>
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Cleaning / Oral Prophylaxis</h5>
                            <div className="services-subtitle">lorem ipsum dolor sit amet, consectetur adip</div>
                        </div>
                    </div>
                    <div className="services-card-container" style={{backgroundImage: `url(${Doctor_3})`}}>
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Tooth Restoration (Filling/Pasta)</h5>
                            <div className="services-subtitle">lorem ipsum dolor sit amet, consectetur adip</div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="services-second-col-card-container">
                    <div className="services-card-container" style={{backgroundImage: `url(${Doctor_4})`}}>
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Flouride Application</h5>
                            <div className="services-subtitle">lorem ipsum dolor sit amet, consectetur adip</div>
                        </div>
                    </div>
                    <div className="services-card-container" style={{backgroundImage: `url(${Doctor_5})`}}>
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Sealant</h5>
                            <div className="services-subtitle">lorem ipsum dolor sit amet, consectetur adip</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Services
