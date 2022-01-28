import React from 'react'
import Profession_clinic_1 from '../../images/5.jpg'
import Profession_clinic_2 from '../../images/profession-clinic-2.jpg'
import {Row, Col} from 'react-bootstrap';

const ProfessionClinic = () => {
    return (
        <div className="container home-container-margin">
            <div className="profession-clinic-header">
                <h1 className="title profession-clinic-title">Antiquera</h1>
                <h1 className="title profession-clinic-subtitle">Dental Clinic</h1>
            </div>
            <Row style={{display: 'flex', alignItems: 'center'}}>
                <Col md={4}>
                    <h4 className="profession-clinic-col-title">Every smile deserves a quality service.</h4>
                    <p className="sub-title">Our clinic provides every patient with the highest quality of dental care. Using high quality materials, professional and safe practices so that everyone can wear a beautiful smile.</p>
                </Col>
                <Col md={4} className="profession-clinic-mid-col">
                    <img src={Profession_clinic_1} alt="header-img" className="profession-clinic-img mid"  loading="eager"/>
                </Col>
                <Col md={4}>
                    <img src={Profession_clinic_2} alt="header-img" className="profession-clinic-img"  loading="eager"/>
                </Col>
            </Row>
        </div>
    )
}

export default ProfessionClinic
