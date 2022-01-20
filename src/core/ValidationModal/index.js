import {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import './index.css'
import {updateAppointmentStatus, appointmentList, approvedAppointmentList} from '../api/api'
import {isAuthenticated} from '../../auth'

import AppointmentDetailsComponent from '../Appointments/AppointmentDetails'



const ValidationModalComponent = (props) => {

    const {state, setState, appointment, title, confirmButtonClr, setValidation} = props;

    const [showAllConfirmed, setShowAllConfirmed] = useState('all')
   
    const getAppointmentList = (state, setState) => {
        appointmentList('all', isAuthenticated())
            .then(data => {
                console.log(data)
                if(data.status === "FAILED") {
                    return (
                        setState({error: data.status})
                    )
                } else return setState({...state, historyAppointments: data.appointments, loading: false})
            })
    }

    const handleConfirm = async(title) => {
        if(title === 'Approve') {
            await updateAppointmentStatus(props.id, 'Confirmed', state, setState)
            getAppointmentList(state, setState)
        } else if (title === 'Cancel') {
            await updateAppointmentStatus(props.id, 'Cancelled', state, setState)
            getAppointmentList(state, setState)
        } else if (title === 'Show All Confirmed') {
            await approvedAppointmentList(showAllConfirmed, state, setState)
        }
        setValidation({modalShow: false})
    }


    const handleSortConfirm = (e) => {
        setShowAllConfirmed(e.target.value)
    }
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="modal-container">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {title === 'Approve' && `Do you really want to to approve ${appointment.patient_name}'s account?`}
                        {title === 'Cancel' && `Do you really want to to cancel ${appointment.patient_name}'s account?`}
                        {title === 'Reschedule' && (
                            <AppointmentDetailsComponent 
                                appointment={appointment} 
                                setValidation={setValidation} 
                                state={state} 
                                setState={setState} 
                            />
                        )}
                        {title === 'Show All Confirmed' && (
                            <Form>
                                <label for="cars">Sort by:</label>
                                <Form.Select name="cars" id="cars" value={showAllConfirmed} onChange={(e) => handleSortConfirm(e)}>
                                    <option value="all">All</option>
                                    <option value="today">Today</option>
                                    <option value="week">Week</option>
                                    <option value="2weeks">2 Weeks</option>
                                    <option value="month">Month</option>
                                </Form.Select>
                            </Form>
                        )}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    {title === 'Reschedule' ? '' : <Button onClick={() => handleConfirm(title)} style={{background: confirmButtonClr}}>Confirm</Button>}
                    <Button onClick={() => setValidation({modalShow: false})} variant="secondary">Cancel</Button>
                </Modal.Footer>
            </div>
        </Modal>
    )
}

export default ValidationModalComponent
