import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'



const NewAppointmentComponent = () => {
    const [state, setState] = useState({
        patient_name: '', 
        age: '',
        address: '',
        contact_number: '',
        work: '',
        status: '',
        preferred_date: '',
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

    
    const handleSubmit = () => {

    }

    return (
        <div className="container" style={{paddingTop: '9.1rem'}}>
            <h1>New Appointment</h1>
                    <div className="row-form">
                        <div className="item-form">
                            <h6>Name:</h6>
                            <Form.Control className="appointment-form-label" type="text" placeholder={``}  />
                        </div>
                        <div className="item-form">
                            <h6>Age:</h6>
                            <Form.Control className="appointment-form-label" type="text" placeholder={``}  />
                        </div>
                        <div className="item-form">
                            <h6>Address:</h6>
                            <Form.Control className="appointment-form-label" type="text" placeholder={``}  />
                        </div>
                    </div>
                    
                    <div className="row-form">
                        <div className="item-form">
                            <h6>Contact no.:</h6>
                            <Form.Control className="appointment-form-label" type="text" placeholder={``}  />
                        </div>
                        <div className="item-form">
                            <h6>Work:</h6>
                            <Form.Control className="appointment-form-label" type="text" placeholder={``}  />
                        </div>
                            <div className="item-form">
                        <h6>Status:</h6>
                            <Form.Control className="appointment-form-label" type="text" placeholder={``}  />
                        </div>
                    </div>
                    <div className="row-form">
                        <div className="item-form">
                            <h6>Preferred Date:</h6>
                            <Form.Control className="appointment-form-label" type="text" placeholder={`dd/mm/yyyy`}  />
                        </div>
                        <div className="item-form">
                            <h6>Preferred Time: </h6>
                            <Form.Control className="appointment-form-label" type="text" placeholder={`00:00(12hours)`}  />
                        </div>
                    </div>
                    <div className="questions-section">
                        <div className="questions-container">
                            <h6>1. INUUBO KA BA?(Do you have cough?): </h6>
                            <div className="row-form">
                                <input  type="radio"
                                    value="Yes"
                                    checked={state.have_cough === "Yes"}
                                    onChange={(e) => setState({...state, have_cough: e.target.value})} />Yes
                        
                                <input  type="radio"
                                    value="No"
                                    checked={state.have_cough === "No"}
                                    onChange={(e) => setState({...state, have_cough: e.target.value})} />No
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>2. MAY SIPON KA BA?(Do you have colds?): </h6>
                            <div className="row-form">
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
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>3. NAGTATAE KA BA?(Are you having Diarrhea?): </h6>
                            <div className="row-form">
                                <input type="radio"
                                    value="Yes"
                                    name="radio2"
                                    checked={state.have_diarrhea === "Yes"}
                                    onChange={(e) => setState({...state, have_diarrhea: e.target.value})} />Yes
                                <input type="radio"
                                    value="No"
                                    name="radio2"
                                    checked={state.have_diarrhea === "No"}
                                    onChange={(e) => setState({...state, have_diarrhea: e.target.value})} />No
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>4. MASAKIT BA ANG LALAMUNAN MO?(Do you have sore throat?): </h6>
                            <div className="row-form">
                                <input type="radio"
                                    value="Yes"
                                    name="radio3"
                                    checked={state.have_sorethroat === "Yes"}
                                    onChange={(e) => setState({...state, have_sorethroat: e.target.value})} />Yes
                                <input type="radio"
                                    value="No"
                                    name="radio3"
                                    checked={state.have_sorethroat === "No"}
                                    onChange={(e) => setState({...state, have_sorethroat: e.target.value})} />No
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>5. MASAKIT BA KATAWAN MO? (Are you experiencing MYALAGIA?): </h6>
                            <div className="row-form">
                                <input type="radio"
                                    value="Yes"
                                    name="radio4"
                                    checked={state.have_bodyache === "Yes"}
                                    onChange={(e) => setState({...state, have_bodyache: e.target.value})} />Yes
                                <input type="radio"
                                    value="No"
                                    name="radio4"
                                    checked={state.have_bodyache === "No"}
                                    onChange={(e) => setState({...state, have_bodyache: e.target.value})} />No
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>6. MASAKIT BA ULO MO? (Do you have headache?): </h6>
                            <div className="row-form">
                                <input type="radio"
                                    value="Yes"
                                    name="radio5"
                                    checked={state.have_headache === "Yes"}
                                    onChange={(e) => setState({...state, have_headache: e.target.value})} />Yes
                                <input type="radio"
                                    value="No"
                                    name="radio5"
                                    checked={state.have_headache === "No"}
                                    onChange={(e) => setState({...state, have_headache: e.target.value})} />No
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>7. MAY LAGNAT KA BA? (Do you have fever-temperature 37.8c and above?): </h6>
                            <div className="row-form">
                                <input type="radio"
                                    value="Yes"
                                    name="radio6"
                                    checked={state.have_hightemp === "Yes"}
                                    onChange={(e) => setState({...state, have_hightemp: e.target.value})} />Yes
                                <input type="radio"
                                    value="No"
                                    name="radio6"
                                    checked={state.have_hightemp === "No"}
                                    onChange={(e) => setState({...state, have_hightemp: e.target.value})} />No
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>8. NAHIHIRAPAN KA BA HUMINGA? (Are you having difficulty breathing?): </h6>
                            <div className="row-form">
                                <input type="radio"
                                    value="Yes"
                                    name="radio7"
                                    checked={state.have_difficultbreathing === "Yes"}
                                    onChange={(e) => setState({...state, have_difficultbreathing: e.target.value})} />Yes
                                <input type="radio"
                                    value="No"
                                    name="radio7"
                                    checked={state.have_difficultbreathing === "No"}
                                    onChange={(e) => setState({...state, have_difficultbreathing: e.target.value})} />No
                            </div>
                        </div>
                        <div className="questions-container"> 
                            <h6>9. NANGHIHINA KA BA PALAGI? (Are you experiencing fatigue?): </h6>
                            <div className="row-form">
                                <input type="radio"
                                    value="Yes"
                                    name="radio8"
                                    checked={state.have_fatigue === "Yes"}
                                    onChange={(e) => setState({...state, have_fatigue: e.target.value})} />Yes
                                <input type="radio"
                                    value="No"
                                    name="radio8"
                                    checked={state.have_fatigue === "No"}
                                    onChange={(e) => setState({...state, have_fatigue: e.target.value})} />No
                            </div>                    
                        </div>
                        <div className="questions-container">
                            <h6>10. MAY TRAVEL HISTORY KA BA? (Have you traveled recently during the past 14 days?):</h6>
                            <div className="row-form">
                                <input type="radio"
                                    value="Yes"
                                    name="radio9"
                                    checked={state.have_travelledPast14days === "Yes"}
                                    onChange={(e) => setState({...state, have_travelledPast14days: e.target.value})} />Yes
                                <input type="radio"
                                    value="No"
                                    name="radio9"
                                    checked={state.have_travelledPast14days === "No"}
                                    onChange={(e) => setState({...state, have_travelledPast14days: e.target.value})} />No
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>11. NANGGALING KA BA SA LUGAR NA MAY POSITIVE COVID-19 CASE? (Do you have a travel history to COVID-19 infected area?): </h6>
                            <div className="row-form">
                                <input type="radio"
                                    value="Yes"
                                    name="radio10"
                                    checked={state.have_travelledWhereCovid === "Yes"}
                                    onChange={(e) => setState({...state, have_travelledWhereCovid: e.target.value})} />Yes
                                <input type="radio"
                                    value="No"
                                    name="radio10"
                                    checked={state.have_travelledWhereCovid === "No"}
                                    onChange={(e) => setState({...state, have_travelledWhereCovid: e.target.value})} />No
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>12. MAY DIRECT CONTACT KA BA SA TAONG POSITIVE SA COVID-19? (Do you have direct contact or is taking care of a positive COVID-19 patient?): </h6>
                            <div className="row-form">
                                <input type="radio"
                                    value="Yes"
                                    name="radio11"
                                    checked={state.have_vicinityWhereCovid === "Yes"}
                                    onChange={(e) => setState({...state, have_vicinityWhereCovid: e.target.value})} />Yes
                                <input type="radio"
                                    value="No"
                                    name="radio11"
                                    checked={state.have_vicinityWhereCovid === "No"}
                                    onChange={(e) => setState({...state, have_vicinityWhereCovid: e.target.value})} />No
                            </div>
                        </div>
                    </div>
                <br />
                <Button variant={`primary`} onClick={() => handleSubmit()} style={{marginTop: '1rem'}}>Submit</Button>
        </div>
    )
}

export default NewAppointmentComponent
