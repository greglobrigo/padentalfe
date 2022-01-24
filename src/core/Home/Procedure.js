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
                                A. Click the 'Book an Appointment' Button.
                                <br/>
                                B. Fill up the form.
                                <br/>
                                C. Click 'Submit' Button.
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="procedure-col-number">2</div>
                            <h5 className="procedure-col-title">Assessment</h5>
                            <div className="procedure-col-desc">
                                A. Wait for the approval of your desired schedule. 
                                <br />
                                B. You may check the status your scheduled appointment at the 'My Appointments' menu section.
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="procedure-col-number">3</div>
                            <h5 className="procedure-col-title">Perform Treatment</h5>
                            <div className="procedure-col-desc">
                                A. Patient should be at the clinic 15mins before its scheduled appointment. 
                                <br/>
                                B. Perform treatment.
                            </div>
                        </Col>
                    </Row> 
               </div>
            </div> 
        </div>
    )
}

export default ProcedureComponent
