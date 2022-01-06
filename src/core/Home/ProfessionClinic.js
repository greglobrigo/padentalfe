import React from 'react'
import Profession_clinic_1 from '../../images/profession-clinic-1.jpg'
import Profession_clinic_2 from '../../images/profession-clinic-2.jpg'
import {Row, Col} from 'react-bootstrap';

const ProfessionClinic = () => {
    return (
        <div className="container home-container-margin">
            <div className="profession-clinic-header">
                <h1 className="profession-clinic-title">Antiquera</h1>
                <h1 className="profession-clinic-subtitle">Profession Clinic</h1>
            </div>
            <Row style={{display: 'flex', alignItems: 'center'}}>
                <Col md={4}>
                    <h4 className="profession-clinic-col-title">Teeth are Always in Fashion</h4>
                    <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in diam accumsan, aliquet justo mattis, posuere ex. Aliquam erat volutpat. Vivamus efficitur libero vel lacus ultricies, sed euismod justo consequat.</p>
                </Col>
                <Col md={4} className="profession-clinic-mid-col">
                    <img src={Profession_clinic_1} alt="header-img" className="profession-clinic-img mid" />
                </Col>
                <Col md={4}>
                    <img src={Profession_clinic_2} alt="header-img" className="profession-clinic-img" />
                </Col>
            </Row>
        </div>
    )
}

export default ProfessionClinic
