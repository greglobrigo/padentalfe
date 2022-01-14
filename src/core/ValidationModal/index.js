import {Modal, Button, Form, ButtonGroup, ToggleButton} from 'react-bootstrap'
import {useRef, useState} from 'react'
import './index.css'
import Moment from 'react-moment';



const ValidationModalComponent = (props) => {
    


    const handleSubmit = () => {

    }



    return (
        <Modal
            {...props}
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {(props.action === 'view') && 
                <>
                    <h6>Name:</h6>
                    <Form.Control className="appointment-form-label" type="text" placeholder={props.data.patient_name} readOnly />
                    <h6>Age:</h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.age} readOnly />
                    <h6>Address:</h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.address} readOnly />
                    <h6>Contact no.:</h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.contact_number} readOnly />
                    <h6>Work:</h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.work} readOnly />
                    <h6>Status:</h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.status} readOnly />
                    <h6>Preferred Date:</h6>
                    <div className="appointment-form-label time-n-date">{<Moment format="MM/DD/YY">{props.data.preferred_date}</Moment>} </div>
                    <h6>Preferred Time: </h6>
                    <div className="appointment-form-label time-n-date"> {<Moment format="LT">{props.data.preferred_time}</Moment>}</div>
                    <h6>1. INUUBO KA BA?(Do you have cough?): </h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_cough?.toString() === true ? 'Yes' : 'No'} readOnly />
                    <h6>2. MAY SIPON KA BA?(Do you have colds?): </h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_colds?.toString()  === true ? 'Yes' : 'No'} readOnly />
                    <h6>3. NAGTATAE KA BA?(Are you having Diarrhea?): </h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_diarrhea?.toString()  === true ? 'Yes' : 'No'} readOnly />
                    <h6>4. MASAKIT BA ANG LALAMUNAN MO?(Do you have sore throat?): </h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_sorethroat?.toString()  === true ? 'Yes' : 'No'} readOnly />
                    <h6>5. MASAKIT BA KATAWAN MO? (Are you experiencing MYALAGIA?): </h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_bodyache?.toString()  === true ? 'Yes' : 'No'} readOnly />
                    <h6>6. MASAKIT BA ULO MO? (Do you have headache?): </h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_headache?.toString()  === true ? 'Yes' : 'No'} readOnly />
                    <h6>7. MAY LAGNAT KA BA? (Do you have fever-temperature 37.8c and above?): </h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_hightemp?.toString()  === true ? 'Yes' : 'No'} readOnly />
                    <h6>8. NAHIHIRAPAN KA BA HUMINGA? (Are you having difficulty breathing?): </h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_difficultbreathing?.toString()  === true ? 'Yes' : 'No'} readOnly />
                    <h6>9. NANGHIHINA KA BA PALAGI? (Are you experiencing fatigue?): </h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_fatigue?.toString()  === true ? 'Yes' : 'No'} readOnly />
                    <h6>10. MAY TRAVEL HISTORY KA BA? (Have you traveled recently during the past 14 days?):</h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_travelledPast14days?.toString()  === true ? 'Yes' : 'No'} readOnly />
                    <h6>11. NANGGALING KA BA SA LUGAR NA MAY POSITIVE COVID-19 CASE? (Do you have a travel history to COVID-19 infected area?): </h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_travelledWhereCovid?.toString()  === true ? 'Yes' : 'No'} readOnly />
                    <h6>12. MAY DIRECT CONTACT KA BA SA TAONG POSITIVE SA COVID-19? (Do you have direct contact or is taking care of a positive COVID-19 patient?): </h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.have_vicinityWhereCovid?.toString()  === true ? 'Yes' : 'No'} readOnly />
                </>
            }
        </Modal.Body>
        {props.action !== 'edit' && 
            <Modal.Footer>
                <Button variant={props.btncolor} onClick={() => handleSubmit()}>Submit</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        }
        </Modal>
    )
}

export default ValidationModalComponent
