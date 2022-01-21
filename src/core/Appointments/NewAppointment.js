import React, {useState, useRef} from 'react'
import {Redirect} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {bookAppointment} from '../api/api'
import {isAuthenticated} from '../../auth'
import {notifyWarning} from '../../helpers'





const NewAppointmentComponent = () => {
    const [state, setState] = useState({
        patient_name: '', 
        address: '',
        work: '',
        note: '',
        age: '',
        contact: '',
        preferred_time: '',
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
        redirectToAppointments: false
    });


    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            patient_name, 
            address,
            work,
            note,
            age,
            contact,
            preferred_time,
            preferred_date,
            have_cough,
            have_colds, 
            have_diarrhea,
            have_sorethroat,
            have_bodyache,
            have_headache,
            have_hightemp,
            have_difficultbreathing,
            have_fatigue,
            have_travelledPast14days,
            have_travelledWhereCovid,
            have_vicinityWhereCovid} = state;

        const casePatient_name = patient_name?.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())


        const patient_data = {
            patient_name: casePatient_name,
            age,
            address,
            contact_number: contact,
            work,
            note,
            preferred_time,
            preferred_date,
            have_cough: have_cough === '' ? '' : (have_cough === 'Yes'),
            have_colds: have_colds === '' ? '' : (have_colds === 'Yes'), 
            have_diarrhea: have_diarrhea === '' ? '' : (have_diarrhea === 'Yes'),
            have_sorethroat: have_sorethroat === '' ? '' : (have_sorethroat === 'Yes'),
            have_bodyache: have_bodyache === '' ? '' : (have_bodyache === 'Yes'),
            have_headache: have_headache === '' ? '' : (have_headache === 'Yes'),
            have_hightemp: have_hightemp === '' ? '' : (have_hightemp === 'Yes'),
            have_difficultbreathing: have_difficultbreathing === '' ? '' : (have_difficultbreathing === 'Yes'),
            have_fatigue: have_fatigue === '' ? '' : (have_fatigue === 'Yes'),
            have_travelledPast14days: have_travelledPast14days === '' ? '' : (have_travelledPast14days === 'Yes'),
            have_travelledWhereCovid: have_travelledWhereCovid === '' ? '' : (have_travelledWhereCovid === 'Yes'),
            have_vicinityWhereCovid: have_vicinityWhereCovid === '' ? '' : (have_vicinityWhereCovid === 'Yes'),
        }
        bookAppointment(patient_data, isAuthenticated(), state, setState, notifyWarning)
        
    }

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const onHandleContact = (e) => {
        const contact = e.target.value
        if (contact === '' || /^[0-9\b]+$/.test(contact)){
            setState({...state, contact: e.target.value})
        }
    }

    const onHandleAge = (e) => {
        const age = e.target.value
        if (age === '' || /^[0-9\b]+$/.test(age)){
            setState({...state, age: e.target.value})
        }
    }

    if(state.redirectToAppointments) {
        return <Redirect to={`/appointments`} />
    }
    


    return (
        <div className="container" style={{paddingTop: '9.1rem'}}>
            <form onSubmit={handleSubmit} >
                <div className="menu-title-container">
                    <h1 className="title menu-title" >New Appointment</h1>
                    <Link to="#" ><Button className="button submit-button" type="submit" variant={`primary`} onClick={(e) => handleSubmit(e)}>Submit</Button></Link>
                </div>    
                    <div className="row-form">
                        <div className="item-form">
                            <h6>Name:</h6>
                            <Form.Control className="appointment-form-label" type="text" placeholder={``} value={state.patient_name} onChange={(e) => setState({...state, patient_name: e.target.value})} required/>
                        </div>
                        <div className="item-form">
                            <h6>Age:</h6>
                            <Form.Control className="appointment-form-label" type="text" maxLength="2" placeholder={``} value={state.age} onChange={(e) => onHandleAge(e)} required />
                        </div>
                        <div className="item-form">
                            <h6>Contact no.:</h6>
                            <Form.Control className="appointment-form-label" type="text" maxLength="11" placeholder={`e.g. (09979991234)`} value={state.contact} onChange={(e) => onHandleContact(e)} required />
                        </div>
                    </div>
                    
                    <div className="row-form">
                        <div className="item-form">
                            <h6>Address:</h6>
                            <Form.Control className="appointment-form-label" type="text" placeholder={``} value={state.address} onChange={(e) => setState({...state, address: e.target.value})} required />
                        </div>
                        <div className="item-form">
                            <h6>Work (if applicable / "NA" if non):</h6>
                            <Form.Control className="appointment-form-label" type="text" placeholder={``} value={state.work} onChange={(e) => setState({...state, work: e.target.value})} required />
                        </div>
                    </div>
                    <div className="row-form">
                        <div className="item-form">
                            <h6>Preferred Date:</h6>
                            <Form.Control className="appointment-form-label" type="date" placeholder={`dd/mm/yyyy`} required min={disablePastDate()} value={state.preferred_date} onChange={(e) => setState({...state, preferred_date: e.target.value})} />
                        </div>
                        <div className="item-form">
                            <h6>Preferred Time: <small style={{color: '#acacac'}}>Clinic hours are 9am to 5pm</small></h6>
                            <Form.Control className="appointment-form-label" type="time" placeholder={`8:00 AM`} required min="09:00" max="17:00" value={state.preferred_time} onChange={(e) => setState({...state, preferred_time: e.target.value})} />
                        </div>
                    </div>
                    <div className="row-form">
                        <div className="item-form">
                            <h6>Note:</h6>
                            <Form.Control as="textarea" maxLength="30" className="appointment-form-label" type="text" placeholder={``} value={state.note} onChange={(e) => setState({...state, note: e.target.value})} required style={{ height: 'auto' }} />
                        </div>
                    </div>
                    <div className="questions-section">
                        <div className="questions-container">
                            <h6>1. INUUBO KA BA?(Do you have cough?): </h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio"
                                        checked={state.have_cough === "Yes"}
                                        onChange={(e) => setState({...state, have_cough: e.target.value})} required />Yes 
                                </label>
                                <label>
                                    <input type="radio"
                                        value="No"
                                        name="radio"
                                        checked={state.have_cough === "No"}
                                        onChange={(e) => setState({...state, have_cough: e.target.value})} />No
                                </label>
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>2. MAY SIPON KA BA?(Do you have colds?): </h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio1"
                                        checked={state.have_colds === "Yes"}
                                        onChange={(e) => setState({...state, have_colds: e.target.value})} required/>Yes
                                </label>
                                <label>
                                    <input type="radio"
                                        value="No"
                                        name="radio1"
                                        checked={state.have_colds === "No"}
                                        onChange={(e) => setState({...state, have_colds: e.target.value})} />No
                                </label>
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>3. NAGTATAE KA BA?(Are you having Diarrhea?): </h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio2"
                                        checked={state.have_diarrhea === "Yes"}
                                        onChange={(e) => setState({...state, have_diarrhea: e.target.value})} required/>Yes
                                </label>
                                <label>
                                    <input type="radio"
                                        value="No"
                                        name="radio2"
                                        checked={state.have_diarrhea === "No"}
                                        onChange={(e) => setState({...state, have_diarrhea: e.target.value})} />No
                                </label>
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>4. MASAKIT BA ANG LALAMUNAN MO?(Do you have sore throat?): </h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio3"
                                        checked={state.have_sorethroat === "Yes"}
                                        onChange={(e) => setState({...state, have_sorethroat: e.target.value})} required/>Yes
                                </label>
                                <label>
                                    <input type="radio"
                                        value="No"
                                        name="radio3"
                                        checked={state.have_sorethroat === "No"}
                                        onChange={(e) => setState({...state, have_sorethroat: e.target.value})} />No
                                </label>
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>5. MASAKIT BA KATAWAN MO? (Are you experiencing MYALAGIA?): </h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio4"
                                        checked={state.have_bodyache === "Yes"}
                                        onChange={(e) => setState({...state, have_bodyache: e.target.value})} required/>Yes
                                </label>
                                <label>
                                <input type="radio"
                                    value="No"
                                    name="radio4"
                                    checked={state.have_bodyache === "No"}
                                    onChange={(e) => setState({...state, have_bodyache: e.target.value})} />No
                                </label>
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>6. MASAKIT BA ULO MO? (Do you have headache?): </h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio5"
                                        checked={state.have_headache === "Yes"}
                                        onChange={(e) => setState({...state, have_headache: e.target.value})} required/>Yes
                                </label>
                                <label>
                                    <input type="radio"
                                        value="No"
                                        name="radio5"
                                        checked={state.have_headache === "No"}
                                        onChange={(e) => setState({...state, have_headache: e.target.value})} />No
                                </label>
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>7. MAY LAGNAT KA BA? (Do you have fever-temperature 37.8c and above?): </h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio6"
                                        checked={state.have_hightemp === "Yes"}
                                        onChange={(e) => setState({...state, have_hightemp: e.target.value})} required/>Yes
                                </label>
                                <label>
                                    <input type="radio"
                                        value="No"
                                        name="radio6"
                                        checked={state.have_hightemp === "No"}
                                        onChange={(e) => setState({...state, have_hightemp: e.target.value})} />No
                                </label>
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>8. NAHIHIRAPAN KA BA HUMINGA? (Are you having difficulty breathing?): </h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio7"
                                        checked={state.have_difficultbreathing === "Yes"}
                                        onChange={(e) => setState({...state, have_difficultbreathing: e.target.value})} required/>Yes
                                </label>
                                <label>
                                    <input type="radio"
                                        value="No"
                                        name="radio7"
                                        checked={state.have_difficultbreathing === "No"}
                                        onChange={(e) => setState({...state, have_difficultbreathing: e.target.value})} />No
                                </label>
                            </div>
                        </div>
                        <div className="questions-container"> 
                            <h6>9. NANGHIHINA KA BA PALAGI? (Are you experiencing fatigue?): </h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio8"
                                        checked={state.have_fatigue === "Yes"}
                                        onChange={(e) => setState({...state, have_fatigue: e.target.value})} required/>Yes
                                </label>
                                <label>
                                    <input type="radio"
                                        value="No"
                                        name="radio8"
                                        checked={state.have_fatigue === "No"}
                                        onChange={(e) => setState({...state, have_fatigue: e.target.value})} />No
                                </label>
                            </div>                    
                        </div>
                        <div className="questions-container">
                            <h6>10. MAY TRAVEL HISTORY KA BA? (Have you traveled recently during the past 14 days?):</h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio9"
                                        checked={state.have_travelledPast14days === "Yes"}
                                        onChange={(e) => setState({...state, have_travelledPast14days: e.target.value})} required/>Yes
                                </label>
                                <label>
                                    <input type="radio"
                                        value="No"
                                        name="radio9"
                                        checked={state.have_travelledPast14days === "No"}
                                        onChange={(e) => setState({...state, have_travelledPast14days: e.target.value})} />No
                                </label>
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>11. NANGGALING KA BA SA LUGAR NA MAY POSITIVE COVID-19 CASE? (Do you have a travel history to COVID-19 infected area?): </h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio10"
                                        checked={state.have_travelledWhereCovid === "Yes"}
                                        onChange={(e) => setState({...state, have_travelledWhereCovid: e.target.value})} required/>Yes
                                </label>
                                <label>
                                    <input type="radio"
                                        value="No"
                                        name="radio10"
                                        checked={state.have_travelledWhereCovid === "No"}
                                        onChange={(e) => setState({...state, have_travelledWhereCovid: e.target.value})} />No
                                </label>
                            </div>
                        </div>
                        <div className="questions-container">
                            <h6>12. MAY DIRECT CONTACT KA BA SA TAONG POSITIVE SA COVID-19? (Do you have direct contact or is taking care of a positive COVID-19 patient?): </h6>
                            <div className="row-form">
                                <label>
                                    <input type="radio"
                                        value="Yes"
                                        name="radio11"
                                        checked={state.have_vicinityWhereCovid === "Yes"}
                                        onChange={(e) => setState({...state, have_vicinityWhereCovid: e.target.value})} required/>Yes
                                </label>
                                <label>
                                    <input type="radio"
                                        value="No"
                                        name="radio11"
                                        checked={state.have_vicinityWhereCovid === "No"}
                                        onChange={(e) => setState({...state, have_vicinityWhereCovid: e.target.value})} />No
                                </label>
                            </div>
                        </div>
                    </div>
                <br />
                
            </form>
        </div>
    )
}

export default NewAppointmentComponent
