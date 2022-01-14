import {Modal, Button, Form, ButtonGroup, ToggleButton} from 'react-bootstrap'
import {useRef, useState} from 'react'
import './index.css'
import Moment from 'react-moment';



const ValidationModalComponent = (props) => {
    const [state, setState] = useState({
        have_cough: '',
        have_colds: '', 
        have_diarrhea: '',
        have_sorethroat: '',
        have_bodyache: '',
        have_headache: '',
        have_hightemp: '',
        have_difficultbreathing: '',
        have_fatigue: '',
        have_travelledPast14days: '',
        have_travelledWhereCovid: '',
        have_vicinityWhereCovid: '',
        selectedOption: '',
        selectedOption1: ''
    });

    const radios = [
      { name: 'Yes', value: 'Yes' },
      { name: 'No', value: 'No' },
    ];


    const handleSubmit = () => {

    }


      console.log({state})

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
                    <div className="appointment-form-label time-n-date">{<Moment format="MM/DD/YY">{props.data.preferred_data}</Moment>} </div>
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
            {(props.action === 'new') && 
                <>
                    <h6>Name:</h6>
                    <Form.Control className="appointment-form-label" type="text" placeholder={`Juan Dela Cruz`}  />
                    <h6>Age:</h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.age}  />
                    <h6>Address:</h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.address}  />
                    <h6>Contact no.:</h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.contact_number}  />
                    <h6>Work:</h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.work}  />
                    <h6>Status:</h6>
                    <Form.Control className="appointment-form-label" type="text" value={props.data.status}  />
                    <h6>Preferred Date:</h6>
                    <div className="appointment-form-label time-n-date">{<Moment format="MM/DD/YY">{props.data.preferred_data}</Moment>} </div>
                    <h6>Preferred Time: </h6>
                    <div className="appointment-form-label time-n-date"> {<Moment format="LT">{props.data.preferred_time}</Moment>}</div>
                    <h6>1. INUUBO KA BA?(Do you have cough?): </h6>
                    <input  type="radio"
                        value="Yes"
                        checked={state.have_cough === "Yes"}
                        onChange={(e) => setState({...state, have_cough: e.target.value})} />Yes
                    <input  type="radio"
                        value="No"
                        checked={state.have_cough === "No"}
                        onChange={(e) => setState({...state, have_cough: e.target.value})} />Nocl
                    <h6>2. MAY SIPON KA BA?(Do you have colds?): </h6>
                    <input type="radio"
                        value="Yes"
                        name="radio1"
                        checked={state.have_colds === "Yes"}
                        onChange={(e) => setState({...state, have_colds: e.target.value})} />Yes
                    <input type="radio"
                        value="No"
                        name="radio1"
                        checked={state.have_colds === "No"}
                        onChange={(e) => setState({...state, have_colds: e.target.value})} />No
                    <h6>3. NAGTATAE KA BA?(Are you having Diarrhea?): </h6>
                    {/* <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={state.have_diarrhea}
                            checked={state.have_diarrhea}
                            onChange={(e) => setState({...state, have_diarrhea: e.currentTarget.value})}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <h6>4. MASAKIT BA ANG LALAMUNAN MO?(Do you have sore throat?): </h6>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={state.have_sorethroat === radio.value}
                            onChange={(e) => setState({...state, have_sorethroat: e.currentTarget.value})}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <h6>5. MASAKIT BA KATAWAN MO? (Are you experiencing MYALAGIA?): </h6>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={state.bodyache === radio.value}
                            onChange={(e) => setState({...state, bodyache: e.currentTarget.value})}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <h6>6. MASAKIT BA ULO MO? (Do you have headache?): </h6>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={state.have_headache === radio.value}
                            onChange={(e) => setState({...state, have_headache: e.currentTarget.value})}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <h6>7. MAY LAGNAT KA BA? (Do you have fever-temperature 37.8c and above?): </h6>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={state.have_hightemp === radio.value}
                            onChange={(e) => setState({...state, have_hightemp: e.currentTarget.value})}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <h6>8. NAHIHIRAPAN KA BA HUMINGA? (Are you having difficulty breathing?): </h6>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={state.have_difficultbreathing === radio.value}
                            onChange={(e) => setState({...state, have_difficultbreathing: e.currentTarget.value})}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <h6>9. NANGHIHINA KA BA PALAGI? (Are you experiencing fatigue?): </h6>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={state.have_fatigue === radio.value}
                            onChange={(e) => setState({...state, have_fatigue: e.currentTarget.value})}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <h6>10. MAY TRAVEL HISTORY KA BA? (Have you traveled recently during the past 14 days?):</h6>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={state.have_travelledPast14days === radio.value}
                            onChange={(e) => setState({...state, have_travelledPast14days: e.currentTarget.value})}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <h6>11. NANGGALING KA BA SA LUGAR NA MAY POSITIVE COVID-19 CASE? (Do you have a travel history to COVID-19 infected area?): </h6>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={state.have_travelledWhereCovid === radio.value}
                            onChange={(e) => setState({...state, have_travelledWhereCovid: e.currentTarget.value})}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <h6>12. MAY DIRECT CONTACT KA BA SA TAONG POSITIVE SA COVID-19? (Do you have direct contact or is taking care of a positive COVID-19 patient?): </h6>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={state.have_vicinityWhereCovid === radio.value}
                            onChange={(e) => setState({...state, have_vicinityWhereCovid: e.currentTarget.value})}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup> */}
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
