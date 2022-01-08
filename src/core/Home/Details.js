import React from 'react'
import {Row, Col, Button} from 'react-bootstrap';
import DentalLogo from '../../images/dental_logo1.png'
import {MdLocationOn} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdAccessTimeFilled} from 'react-icons/md'
import {Link} from 'react-router-dom'


const DetailsComponent = () => {
    return (
        <div className="details-container">
            <div className="container home-container-margin">
                <Row>
                    <Col>
                        <div className="details-first-col">
                            <img src={DentalLogo} alt="logo" className="details-dental-logo" />
                            <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam accumsan, aliquet justo mattis, posuere ex. Aliquam erat volutpat. Vivamus efficitur libero vel lacus ultricies, sed euismod justo consequat.</p>

                            <div className="company-details-container">
                                <div className="details-main">
                                    <div className="details-icon">
                                        <MdLocationOn />
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="details-title">Address</h6>
                                        <p className="sub-title" style={{marginBottom: 'unset'}}>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                                <div className="details-main">
                                    <div className="details-icon">
                                        <BsFillTelephoneFill />
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="details-title">Phone</h6>
                                        <p className="sub-title" style={{marginBottom: 'unset'}}>+999 9999 990</p>
                                    </div>
                                </div>
                                <div className="details-main">
                                    <div className="details-icon">
                                        <MdAccessTimeFilled />
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <h6 className="details-title">Work Time</h6>
                                        <p className="sub-title" style={{marginBottom: 'unset'}}>Mon-Fri: 8 AM-8 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam accumsan, aliquet justo mattis, posuere ex. Aliquam erat volutpat. Vivamus efficitur libero vel lacus ultricies, sed euismod justo consequat.</p>
                        <Button variant="primary" className="button">Make an Appointment</Button>
                        <Row>
                            <Col>
                                <h6 className="details-title">Quick Links</h6>
                                <Link className="nav-link">
                                    <p className="sub-title details-desc">Our Services</p>
                                </Link>
                                <Link className="nav-link">
                                    <p className="sub-title details-desc">About Antiquera Dental Clinic</p>
                                </Link>
                                <Link className="nav-link">
                                    <p className="sub-title details-desc">Our Contacts</p>
                                </Link>
                            </Col>
                            <Col>
                                <h6 className="details-title">Help Center</h6>
                                <Link className="nav-link">
                                    <p className="sub-title details-desc">Patient Support</p>
                                </Link>
                                <a className="nav-link" rel="noreferrer" href="https://m.me/antiqueradentalclinic" target="_blank">
                                    <p className="sub-title details-desc">Message us</p>
                                </a>
                                <Link className="nav-link">
                                    <p className="sub-title details-desc">Registration</p>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row> 
            </div>
        </div>
    )
}

export default DetailsComponent
