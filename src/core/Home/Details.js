import React from 'react'
import {Row, Col, Button} from 'react-bootstrap';
import DentalLogo from '../../images/dental_logo1.png'
import {MdLocationOn} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdAccessTimeFilled} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {isAuthenticated} from '../../auth'


const DetailsComponent = () => {
    return (
        <div className="details-container">
            <div className="container home-container-margin">
                <Row>
                    <Col md={6}>
                        <div className="details-first-col">
                            <img src={DentalLogo} alt="logo" className="details-dental-logo" />
                            <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam accumsan, aliquet justo mattis, posuere ex. Aliquam erat volutpat. Vivamus efficitur libero vel lacus ultricies, sed euismod justo consequat.</p>

                            <div className="company-details-container">
                                <div className="details-main">
                                    <div className="details-icon">
                                        <MdLocationOn />
                                    </div>
                                    <div className="details-content-container">
                                        <h6 className="details-title">Address</h6>
                                        <p className="sub-title" style={{marginBottom: 'unset'}}>Ground flr Hotel Rex Bldg., <br/>Aguinaldo St. Legazpi Philippines</p>
                                    </div>
                                </div>
                                <div className="details-main">
                                    <div className="details-icon">
                                        <BsFillTelephoneFill />
                                    </div>
                                    <div className="details-content-container">
                                        <h6 className="details-title">Phone</h6>
                                        <a className="sub-title" rel="noreferrer" style={{marginBottom: 'unset'}} href="tel: +63 917 162 5424">+63 917 162 5424</a>
                                    </div>
                                </div>
                                <div className="details-main">
                                    <div className="details-icon">
                                        <MdAccessTimeFilled />
                                    </div>
                                    <div className="details-content-container">
                                        <h6 className="details-title">Work Time</h6>
                                        <p className="sub-title" style={{marginBottom: 'unset'}}>Mon-Fri: 9:00AM-5:00PM</p>
                                    </div>
                                </div>
                                <div className="details-main">
                                    <div className="details-icon">
                                        <AiOutlineMail />
                                    </div>
                                    <div className="details-content-container">
                                        <h6 className="details-title">Email </h6>
                                        <a className="sub-title" rel="noreferrer" style={{marginBottom: 'unset'}} href="mailto:antiqueradentalclinic@gmail.com?subject=Hello I would like to make an appointment." >antiqueradentalclinic@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam accumsan, aliquet justo mattis, posuere ex. Aliquam erat volutpat. Vivamus efficitur libero vel lacus ultricies, sed euismod justo consequat.</p>
                        {isAuthenticated().admin_email ? <Link to="/appointments"><Button variant="primary" className="button">My Appointments</Button></Link>
                        : <Link to="/appointments/new"><Button variant="primary" className="button">Make an Appointment</Button></Link> }
                        <Row>
                            <Col>
                                <h6 className="details-title">Quick Links</h6>
                                <Link className="nav-link" to="/services">
                                    <p className="sub-title details-desc">Our Services</p>
                                </Link>
                                <a className="nav-link" rel="noreferrer" href="https://www.facebook.com/antiqueradentalclinic/about/?ref=page_internal" target="_blank">
                                    <p className="sub-title details-desc">About Antiquera Dental Clinic</p>
                                </a>
                                {/* <Link className="nav-link">
                                    <p className="sub-title details-desc">Our Contacts</p>
                                </Link> */}
                            </Col>
                            <Col>
                                <h6 className="details-title">Help Center</h6>
                                {/* <Link className="nav-link" to="#">
                                    <p className="sub-title details-desc">Patient Support</p>
                                </Link> */}
                                <a className="nav-link" rel="noreferrer" href="https://m.me/antiqueradentalclinic" target="_blank">
                                    <p className="sub-title details-desc">Direct message us</p>
                                </a>
                                {!isAuthenticated() &&
                                    <Link className="nav-link" to="/signup">
                                        <p className="sub-title details-desc">Register</p>
                                    </Link>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row> 
            </div>
        </div>
    )
}

export default DetailsComponent
