import React from 'react'
import {Row, Col} from 'react-bootstrap';

const ProcedureComponent = () => {
    return (
        <div className="container home-container-margin procedure-section">
           <div className="procedure-container">
               <div className="procedure-container-overlay">
                    <h2 className="title procedure-title">The Procedure</h2>  
                    <Row className="procedure-row-container" >
                        <Col md={4}>
                            <div className="procedure-col-number">1</div>
                            <h5 className="procedure-col-title">Book an Appointment</h5>
                            <div className="procedure-col-desc">
                                Sed consequat orci ante, vitae imperdiet neque suscipit a. Nunc mattis purus at tincidunt porta
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="procedure-col-number">2</div>
                            <h5 className="procedure-col-title">Conduct Oral Checkup</h5>
                            <div className="procedure-col-desc">
                                Sed consequat orci ante, vitae imperdiet neque suscipit a. Nunc mattis purus at tincidunt porta
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="procedure-col-number">3</div>
                            <h5 className="procedure-col-title">Perform Treatment</h5>
                            <div className="procedure-col-desc">
                                Sed consequat orci ante, vitae imperdiet neque suscipit a. Nunc mattis purus at tincidunt porta
                            </div>
                        </Col>
                    </Row> 
               </div>
            </div> 
        </div>
    )
}

export default ProcedureComponent
