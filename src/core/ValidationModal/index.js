import {Modal, Button, Form} from 'react-bootstrap'
import {useRef} from 'react'
import './index.css'
import Moment from 'react-moment';



const ValidationModalComponent = (props) => {
    const name = useRef('testt');
  
    const handleSubmit = (e) => {
        console.log(name.current.value)
        e.preventDefault();
        
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
                    <p>Name: {props.data.patient_name}</p>
                    <p>Age: {props.data.age}</p>
                    <p>Address: {props.data.address}</p>
                    <p>Contact no.: {props.data.contact_number}</p>
                    <p>Work: {props.data.work}</p>
                    <p>Status: {props.data.status}</p>
                    <p>Preferred Date: <Moment format="MM/DD/YY">{props.data.preferred_data}</Moment></p>
                    <p>Preferred Time: <Moment format="LT">{props.data.preferred_time}</Moment></p>
                    <p>1. INUUBO KA BA?(Do you have cough?): {props.data.have_cough?.toString() === true ? 'Yes' : 'No'}</p>
                    <p>2. MAY SIPON KA BA?(Do you have colds?): {props.data.have_colds?.toString()  === true ? 'Yes' : 'No'}</p>
                    <p>3. NAGTATAE KA BA?(Are you having Diarrhea?): {props.data.have_diarrhea?.toString()  === true ? 'Yes' : 'No'}</p>
                    <p>4. MASAKIT BA ANG LALAMUNAN MO?(Do you have sore throat?): {props.data.have_sorethroat?.toString()  === true ? 'Yes' : 'No'}</p>
                    <p>5. MASAKIT BA KATAWAN MO? (Are you experiencing MYALAGIA?): {props.data.have_bodyache?.toString()  === true ? 'Yes' : 'No'}</p>
                    <p>6. MASAKIT BA ULO MO? (Do you have headache?): {props.data.have_headache?.toString()  === true ? 'Yes' : 'No'}</p>
                    <p>7. MAY LAGNAT KA BA? (Do you have fever-temperature 37.8c and above?): {props.data.have_hightemp?.toString()  === true ? 'Yes' : 'No'}</p>
                    <p>8. NAHIHIRAPAN KA BA HUMINGA? (Are you having difficulty breathing?): {props.data.have_difficultbreathing?.toString()  === true ? 'Yes' : 'No'}</p>
                    <p>9. NANGHIHINA KA BA PALAGI? (Are you experiencing fatigue?): {props.data.have_fatigue?.toString()  === true ? 'Yes' : 'No'}</p>
                    <p>10. MAY TRAVEL HISTORY KA BA? (Have you traveled recently during the past 14 days?): {props.data.have_travelledPast14days?.toString()  === true ? 'Yes' : 'No'}</p>
                    <p>11. NANGGALING KA BA SA LUGAR NA MAY POSITIVE COVID-19 CASE? (Do you have a travel history to COVID-19 infected area?): {props.data.have_travelledWhereCovid?.toString()  === true ? 'Yes' : 'No'}</p>
                    <p>12. MAY DIRECT CONTACT KA BA SA TAONG POSITIVE SA COVID-19? (Do you have direct contact or is taking care of a positive COVID-19 patient?): {props.data.have_vicinityWhereCovid?.toString()  === true ? 'Yes' : 'No'}</p>
                </>
            }
        </Modal.Body>
        {props.action !== 'edit' && 
            <Modal.Footer>
                <Button variant={props.btncolor} onClick={() => console.log('Confirm')}>Confirm</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        }
        </Modal>
    )
}

export default ValidationModalComponent
