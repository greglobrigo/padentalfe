import React, {useRef} from 'react';
import Moment from 'react-moment'
import {Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {isAuthenticated} from '../../auth'
import {addComment, appointmentList} from '../api/api'




const AppointmentDetailsComponent = ({appointment, setValidation, state, setState}) => {
    const comment = useRef('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(appointment.id)
        await addComment(appointment.id, comment.current.value, state, setState)
        appointmentList('all', isAuthenticated())
        .then(data => {
            // console.log(data)
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, historyAppointments: data.appointments, loading: false})
        })
        setValidation({modalShow: false})
    }


    return <form onSubmit={handleSubmit} >
    <div className="menu-title-container">
        <h1 className="title menu-title" >Patient Data</h1>
        <Link to="#" ><Button className="button submit-button" type="submit" variant={`primary`} onClick={(e) => handleSubmit(e)}>Submit</Button></Link>
    </div>    
        <div className="row-form">
            <div className="item-form">
                <h6>Name:</h6>
                <Form.Control className="appointment-form-label" type="text" placeholder={``} value={appointment.patient_name} readOnly />
            </div>
            <div className="item-form">
                <h6>Age:</h6>
                <Form.Control className="appointment-form-label" type="text" maxLength="2" placeholder={``} value={appointment.age} readOnly />
            </div>
            <div className="item-form">
                <h6>Contact no.:</h6>
                <Form.Control className="appointment-form-label" type="text" maxLength="11" value={appointment.contact_number} readOnly />
            </div>
        </div>
        
        <div className="row-form">
            <div className="item-form">
                <h6>Address:</h6>
                <Form.Control className="appointment-form-label" type="text" placeholder={``} value={appointment.address} readOnly />
            </div>
            <div className="item-form">
                <h6>Work (if applicable / "NA" if non):</h6>
                <Form.Control className="appointment-form-label" type="text" placeholder={``} value={appointment.work} readOnly />
            </div>
        </div>
        <div className="row-form">
            <div className="item-form">
                <h6>Preferred Date:</h6>
                <Form.Control className="appointment-form-label" type="date" value={appointment.preferred_date} readOnly  />
            </div>
            <div className="item-form">
                <h6>Preferred Time: <small style={{color: '#acacac'}}>Clinic hours are 9am to 5pm</small></h6>
                <div className="appointment-form-label" 
                    style={{
                        border: '1px solid #ced4da', 
                        fontSize: '1rem', 
                        fontWeight: '400', 
                        lineHeight: '1.5', 
                        padding: '0.375rem 0.75rem', 
                        borderRadius: '0.25rem', 
                        backgroundColor: '#e9ecef' 
                    }}><Moment format='LT'>{appointment.preferred_time}</Moment></div>
            </div>
        </div>
        <div className="row-form">
            <div className="item-form">
                <h6>Note:</h6>
                <Form.Control as="textarea" maxLength="120" className="appointment-form-label" type="text" placeholder={``} value={appointment.note} style={{ height: 'auto' }} readOnly />
            </div>
        </div>
        <div className="row-form">
            <div className="item-form">
                <h6>Comment:</h6>
                <Form.Control as="textarea" maxLength="120" className="appointment-form-label" type="text" placeholder={``} ref={comment} style={{ height: 'auto' }} />
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
                            checked={appointment.have_cough === true}
                            readOnly />Yes 
                    </label>
                    <label>
                        <input type="radio"
                            value="No"
                            name="radio"
                            checked={appointment.have_cough === false}
                            readOnly />No
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
                            checked={appointment.have_colds === true} readOnly />Yes
                    </label>
                    <label>
                        <input type="radio"
                            value="No"
                            name="radio1"
                            checked={appointment.have_colds === false} readOnly />No
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
                            checked={appointment.have_diarrhea === true} readOnly />Yes
                    </label>
                    <label>
                        <input type="radio"
                            value="No"
                            name="radio2"
                            checked={appointment.have_diarrhea === false} readOnly />No
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
                            checked={appointment.have_sorethroat === true} readOnly />Yes
                    </label>
                    <label>
                        <input type="radio"
                            value="No"
                            name="radio3"
                            checked={appointment.have_sorethroat === false} readOnly />No
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
                            checked={appointment.have_bodyache === true} readOnly />Yes
                    </label>
                    <label>
                    <input type="radio"
                        value="No"
                        name="radio4"
                        checked={appointment.have_bodyache === false} readOnly />No
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
                            checked={appointment.have_headache === true} readOnly/>Yes
                    </label>
                    <label>
                        <input type="radio"
                            value="No"
                            name="radio5"
                            checked={appointment.have_headache === false} readOnly />No
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
                            checked={appointment.have_hightemp === true} readOnly/>Yes
                    </label>
                    <label>
                        <input type="radio"
                            value="No"
                            name="radio6"
                            checked={appointment.have_hightemp === false} readOnly />No
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
                            checked={appointment.have_difficultbreathing === true} readOnly />Yes
                    </label>
                    <label>
                        <input type="radio"
                            value="No"
                            name="radio7"
                            checked={appointment.have_difficultbreathing === false} readOnly />No
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
                            checked={appointment.have_fatigue === true} readOnly/>Yes
                    </label>
                    <label>
                        <input type="radio"
                            value="No"
                            name="radio8"
                            checked={appointment.have_fatigue === false} readOnly />No
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
                            checked={appointment.have_travelledPast14days === true} readOnly />Yes
                    </label>
                    <label>
                        <input type="radio"
                            value="No"
                            name="radio9"
                            checked={appointment.have_travelledPast14days === false} readOnly />No
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
                            checked={appointment.have_travelledWhereCovid === true} readOnly />Yes
                    </label>
                    <label>
                        <input type="radio"
                            value="No"
                            name="radio10"
                            checked={appointment.have_travelledWhereCovid === false} readOnly />No
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
                            checked={appointment.have_vicinityWhereCovid === true} readOnly/>Yes
                    </label>
                    <label>
                        <input type="radio"
                            value="No"
                            name="radio11"
                            checked={appointment.have_vicinityWhereCovid === false} readOnly/>No
                    </label>
                </div>
            </div>
        </div>
    <br />
    </form>;
};

export default AppointmentDetailsComponent;
