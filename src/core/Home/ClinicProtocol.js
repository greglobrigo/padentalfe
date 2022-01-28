import React from 'react'
import Marquee from "react-fast-marquee";
import Clinic_protocol_1 from '../../images/clinic_protocols/1.png'
import Clinic_protocol_2 from '../../images/clinic_protocols/2.png'
import Clinic_protocol_3 from '../../images/clinic_protocols/3.png'
import Clinic_protocol_4 from '../../images/clinic_protocols/4.png'
import Clinic_protocol_5 from '../../images/clinic_protocols/5.png'
import Clinic_protocol_6 from '../../images/clinic_protocols/6.png'
import Clinic_protocol_7 from '../../images/clinic_protocols/7.png'
import Clinic_protocol_8 from '../../images/clinic_protocols/8.png'

const ClinicProtocol = () => {
    return (
        <>
            <div className="clinic-protocol-overlay"></div>
            <div className="container home-container-margin clinic-protocol-main">
                <h1 className="title profession-clinic-subtitle">Clinic Protocol</h1>
                <p className="sub-title">
                    We encourage you to wear a mask and face shield on your way to the clinic.<br/>
                    Come on time or 15 mins before your appointment if possible.<br/>
                    Please bring your own pen and bring essential items only. <br/>
                    Companions are not allowed except for minors or medically compromised patients. <br/>
                    They may be accompanied by 1 guardian. <br/>
                    If you want to cancel your appointment, please advise us one day ahead of time.
                </p>
                <Marquee 
                    style={{boxShadow: '0px 0px 25px 0px rgb(0 40 255 / 15%)'}}
                    pauseOnHover={true}
                    speed={80}
                    // gradientColor={[90, 175, 196]}
                    gradientColor={false}
                >
                    <div className="clinic-protocol-step-container">
                        <div className="clinic-protocol-step-num">1</div>
                            <img src={Clinic_protocol_1} alt="header-img" className="clinic-protocol-img"  loading="eager"/>
                        <div className="clinic-protocol-step-title">Disinfect Shoes</div>
                    </div>
                    <div className="clinic-protocol-step-container">
                        <div className="clinic-protocol-step-num">2</div>
                            <img src={Clinic_protocol_2} alt="header-img" className="clinic-protocol-img"  loading="eager"/>
                        <div className="clinic-protocol-step-title">Temperature Check & Disinfect Hands</div>
                    </div>
                    <div className="clinic-protocol-step-container">
                        <div className="clinic-protocol-step-num">3</div>
                            <img src={Clinic_protocol_3} alt="header-img" className="clinic-protocol-img"  loading="eager"/>
                        <div className="clinic-protocol-step-title">Wear Show Cover</div>
                    </div>
                    <div className="clinic-protocol-step-container">
                        <div className="clinic-protocol-step-num">4</div>
                            <img src={Clinic_protocol_4} alt="header-img" className="clinic-protocol-img"  loading="eager"/>
                        <div className="clinic-protocol-step-title">Fix Signatures on Forms</div>
                    </div>
                    <div className="clinic-protocol-step-container">
                        <div className="clinic-protocol-step-num">5</div>
                            <img src={Clinic_protocol_5} alt="header-img" className="clinic-protocol-img"  loading="eager"/>
                        <div className="clinic-protocol-step-title">Place stuff on sealed container</div>
                    </div>
                    <div className="clinic-protocol-step-container">
                        <div className="clinic-protocol-step-num">6</div>
                            <img src={Clinic_protocol_6} alt="header-img" className="clinic-protocol-img"  loading="eager"/>
                        <div className="clinic-protocol-step-title">Pre-Treatment</div>
                    </div>
                    <div className="clinic-protocol-step-container">
                        <div className="clinic-protocol-step-num">7</div>
                            <img src={Clinic_protocol_7} alt="header-img" className="clinic-protocol-img"  loading="eager"/>
                        <div className="clinic-protocol-step-title">Treatment Procedure</div>
                    </div>
                    <div className="clinic-protocol-step-container">
                        <div className="clinic-protocol-step-num">8</div>
                            <img src={Clinic_protocol_8} alt="header-img" className="clinic-protocol-img"  loading="eager"/>
                        <div className="clinic-protocol-step-title">Contactless Payment</div>
                    </div>
                </Marquee>
            </div>
        </>
    )
}

export default ClinicProtocol
