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
                <Col lg={4}>
                    <h1 className="profession-clinic-subtitle">Services</h1>
                    {/* <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam accumsan, aliquet justo mattis, posuere ex. Aliquam erat volutpat. Vivamus efficitur libero vel lacus ultricies, sed euismod justo consequat.</p> */}
                    <Link to="/services"><Button variant="primary" className="button">more services</Button></Link>
                    <div className="services-card-container" style={{backgroundImage: `url(${Doctor_1})`}}>
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Dental Consultation</h5>
                            <div className="services-subtitle">The dental consultation is where your dentist will discuss your oral and overall health. They will review your dental x-rays and discuss their findings from the dental exam. If needed, your dentist will recommend treatments and answer any questions you may have.</div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className="services-first-col-card-container">
                    <div className="services-card-container" style={{backgroundImage: `url(${Doctor_2})`}}>
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Cleaning / Oral Prophylaxis</h5>
                            <div className="services-subtitle">Oral Prophylaxis is a professional cleaning procedure performed at our office to get rid of plaque build-up that regular brushing and flossing can't reach.</div>
                        </div>
                    </div>
                    <div className="services-card-container" style={{backgroundImage: `url(${Doctor_3})`}}>
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Tooth Restoration (Filling/Pasta)</h5>
                            <div className="services-subtitle">Tooth restorations are the various ways your dentist can replace missing teeth or repair missing parts of the tooth structure.</div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className="services-second-col-card-container">
                    <div className="services-card-container" style={{backgroundImage: `url(${Doctor_4})`}}>
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Flouride Application</h5>
                            <div className="services-subtitle">Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse.</div>
                        </div>
                    </div>
                    <div className="services-card-container" style={{backgroundImage: `url(${Doctor_5})`}}>
                        <div className="services-second-bg-overlay">
                            <h5 className="services-title">Sealant</h5>
                            <div className="services-subtitle">Dental sealant is a thin, plastic coating painted on the chewing surfaces of teeth -- usually the back teeth (the premolars and molars) -- to prevent tooth decay. The sealant quickly bonds into the depressions and grooves of the teeth, forming a protective shield over the enamel of each tooth.</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Services
