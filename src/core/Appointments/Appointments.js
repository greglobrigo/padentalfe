import React, {useState} from 'react'
import Moment from 'react-moment'
import debounce from 'lodash.debounce'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import {Dropdown, DropdownButton, Card, InputGroup, FormControl, Button} from 'react-bootstrap'
import ValidationModalComponent from '../../core/ValidationModal'
import {appointmentList} from '../api/api'
import {isAuthenticated} from '../../auth'
import moment from 'moment'



const getFilteredItems = (query, items) => {
    if(!query) {
        return items    
    }
    // return items.filter((appointment) => appointment.patient_name.includes(query.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())))
    return items.filter((appointment) => Object.values(appointment).join(" ").toLowerCase().includes(query.toLowerCase()));
}

const AppointmentsComponent = ({state, setState}) => {
    const [query, setQuery] = useState("")
    const [isOrdered, setIsOrdered] = useState(false)
    const [validation, setValidation] = useState({
        modalShow: false,
        title: ''
    })

    const {historyAppointments} = state;

    const isStatus = (status) => {
        if(status === 'Pending') {
            return {background: '#FFA500'}
        } else if (status === 'Confirmed') {
            return {background: '#02B602'}
        } else if (status === "Rescheduled") {
            return {background: 'purple'}
        } else if (status === "Cancelled") {
            return {background: '#FF0000'}
        } else if (status === "Completed") {
            return {background: '#2CD4D6'}
        }
    }


    const [orderedAppointments, setIsOrderedAppointments] = useState(historyAppointments)
    const filteredItems = getFilteredItems(query, orderedAppointments)

    const updateQuery = e => setQuery(e?.target?.value)
    const debounceOnChange = debounce(updateQuery, 200)

    const handleOrderbyDate = () => {
        setIsOrdered(!isOrdered)
        if(isOrdered) {
            const ordered = historyAppointments.sort((a, b) => {return new Date(b.preferred_date) - new Date(a.preferred_date) })
            setIsOrderedAppointments(ordered)
        } else if(!isOrdered) {
            const ordered = historyAppointments.sort((a, b) => {return  new Date(a.preferred_date) - new Date(b.preferred_date) })
            setIsOrderedAppointments(ordered)
        }
    }


    const handleSelectStatus = (value, appointment) => {
        if(value === 'approve') {
            setValidation({
                modalShow: true,
                title: 'Approve',
                background: '#02B602',
                appointment
            })
        } else if(value === 'cancel') {
            setValidation({
                modalShow: true,
                title: 'Cancel',
                background: '#FF0000',
                appointment
            })
        } else if (value === 'reschedule') {
            setValidation({
                modalShow: true,
                title: 'Reschedule',
                background: 'purple',
                appointment
            })
        }
    }


    const handleGetAll = async (value) => {
        if(value === 'All') {
            setState({loading: true})
            appointmentList('all', isAuthenticated())
            .then(data => {
                // console.log(data)
                if(data.status === "FAILED") {
                    return (
                        setState({error: data.status})
                    )
                } else return setState({...state, historyAppointments: data.appointments, loading: false})
            })
        }
        else if(value === 'Approved') {
            setValidation({
                modalShow: true,
                title: 'Show All Confirmed',
                background: '#02B602',
            })
        }
        
    }

    
    return (
        <div className="appointment-cards-container">
            {/* <h1>Appointments</h1> */}
            
            <div className="appointment-data-controller">
                <div style={{display: 'flex', gap: '0.5rem'}}>
                    {isAuthenticated().admin_email && <><Button style={{background: '#062d92', color: '#fff', border: '1px solid #acacac'}} onClick={() => handleGetAll('All')}>All</Button>
                    <Button style={{background: '#02B602', border: 'none'}} onClick={() => handleGetAll('Approved')}>Show All Confirmed</Button></>}
                    {/* <Button style={{background: '#FF0000', border: 'none'}} >Cancelled</Button>
                    <Button style={{background: 'purple', border: 'none'}} >Rescheduled</Button> */}
                </div>
                {isAuthenticated().admin_email && 
                (<InputGroup>
                    <FormControl
                        placeholder="Search"
                        aria-describedby="basic-addon2"
                        onChange={debounceOnChange}
                    />
                </InputGroup>)}
                <Button variant="primary" style={{background: 'inherit', color: '#000', border: '1px solid #000'}} onClick={() => handleOrderbyDate()}>Sort by Date{isOrdered ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}</Button>
            </div>
                {/* {historyAppointments.map((appointment, index) => {
                        return (
                            <Card key={index}>
                                <div className="appointment-card" >
                                    <div className="appointments-title" style={isStatus(appointment.status)}>{appointment.status}</div>
                                    <div className="appointment-main-detail">
                                        <div className="appointment-main-first-detail">
                                            <div className="appointment-row"><h6 className="appointments-label">Date:</h6><h5 className="appointments-detail"><Moment format="MM/DD/YYYY">{appointment.preferred_date}</Moment></h5></div>
                                            <div className="appointment-row"><h6 className="appointments-label">Time:</h6><h5 className="appointments-detail"><Moment format="LT">{appointment.preferred_time}</Moment></h5></div>
                                            <div className="appointment-row"><h6 className="appointments-label">Note:</h6><h5 className="appointments-detail">{appointment.note}</h5></div>
                                        </div>
                                        <div className="appointment-main-second-detail-mobile">
                                            <DropdownButton align="end" title="More Information" id="dropdown-menu-align-end">
                                                <Dropdown.Item eventKey="1"><div className="appointment-row"><h6 className="appointments-label">Patient name:</h6><h5 className="appointments-detail">{appointment.patient_name}</h5></div></Dropdown.Item>
                                                <Dropdown.Item eventKey="2"><div className="appointment-row"><h6 className="appointments-label">Contact no:</h6><h5 className="appointments-detail">{appointment.contact_number}</h5></div></Dropdown.Item>
                                                <Dropdown.Item eventKey="3"><div className="appointment-row"><h6 className="appointments-label">Comment:</h6><h5 className="appointments-detail">{appointment.comment}</h5></div></Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        <div className="appointment-main-second-detail">
                                            <div className="appointment-row"><h6 className="appointments-label">Patient name:</h6><h5 className="appointments-detail">{appointment.patient_name}</h5></div>
                                            <div className="appointment-row"><h6 className="appointments-label">Contact no:</h6><h5 className="appointments-detail">{appointment.contact_number}</h5></div>
                                            <div className="appointment-row"><h6 className="appointments-label">Comment:</h6><h5 className="appointments-detail">{appointment.comment}</h5></div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Card>
                        )
                    })
                } */}

                {filteredItems.map((appointment, index) => {
                        return (
                            <Card key={index}>
                                <div className="appointment-card" >
                                    <div className="appointments-title" style={isStatus(appointment.status)}>{appointment.status}</div>
                                    <div className="appointment-main-detail">
                                        <div className="appointment-main-first-detail">
                                            <div className="appointment-row"><h6 className="appointments-label">Date:</h6><h5 className="appointments-detail"><Moment format="MM/DD/YYYY">{appointment.preferred_date}</Moment></h5></div>
                                            <div className="appointment-row"><h6 className="appointments-label">Time:</h6><h5 className="appointments-detail">{moment(appointment.preferred_time).add(4, 'hours').format("hh:mm a")}</h5></div>
                                            <div className="appointment-row"><h6 className="appointments-label">Note:</h6><h5 className="appointments-detail appointment-detail-note">{appointment.note}</h5></div>
                                        {appointment?.comment !== null && <div className="appointment-main-second-detail-mobile"><div className="appointment-row"><h6 className="appointments-label">Comment:</h6><h5 className="appointments-detail appointment-detail-note">{appointment.comment}</h5></div></div>}
                                        </div>
                                        <div className="appointment-main-second-detail-mobile">
                                            <DropdownButton align="end" title="More Information" id="dropdown-menu-align-end">
                                                <Dropdown.Item eventKey="1"><div className="appointment-row"><h6 className="appointments-label">Patient name:</h6><h5 className="appointments-detail">{appointment?.patient_name}</h5></div></Dropdown.Item>
                                                <Dropdown.Item eventKey="2"><div className="appointment-row"><h6 className="appointments-label">Contact no:</h6><h5 className="appointments-detail">{appointment.contact_number}</h5></div></Dropdown.Item>
                                                {/* <Dropdown.Item eventKey="3"><div className="appointment-row"><h6 className="appointments-label">Comment:</h6><h5 className="appointments-detail" >{appointment.comment}</h5></div></Dropdown.Item> */}
                                            </DropdownButton>
                                        </div>
                                        <div className="appointment-main-second-detail">
                                            <div className="appointment-row"><h6 className="appointments-label">Patient name:</h6><h5 className="appointments-detail">{appointment?.patient_name}</h5></div>
                                            <div className="appointment-row"><h6 className="appointments-label">Contact no:</h6><h5 className="appointments-detail">{appointment.contact_number}</h5></div>
                                            {appointment?.comment !== null && <div className="appointment-row"><h6 className="appointments-label">Comment:</h6><h5 className="appointments-detail" style={{width: '20rem', minWidth: '16rem'}}>{appointment.comment}</h5></div>}
                                            {isAuthenticated().admin_email && (
                                            <div className="appointment-row">
                                                {appointment.status === 'Cancelled' ? '' :
                                                (<><h6 className="appointments-label">Status:</h6>
                                                <h5 className="appointments-detail" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                                    {appointment.status === 'Confirmed' || appointment.status === 'Rescheduled' ? '' : <Button style={{background: '#02B602', border: 'none'}} onClick={() => handleSelectStatus('approve', appointment)}>Approve</Button>}
                                                    <Button style={{background: '#FF0000', border: 'none'}} onClick={() => handleSelectStatus('cancel', appointment)}>Cancel</Button> 
                                                    {appointment.status === 'Rescheduled' ? '' : <> | <Button style={{background: 'purple', border: 'none'}} onClick={() => handleSelectStatus('reschedule', appointment)}>Reschedule</Button></>}
                                                </h5></>)}
                                            </div>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )
                    })
                }
                <ValidationModalComponent 
                    show={validation.modalShow} 
                    title={validation.title} 
                    confirmButtonClr={validation.background}
                    state={state}
                    setState={setState}
                    setValidation={setValidation}
                    onHide={() => setValidation({modalShow: false})}
                    appointment={validation.appointment}
                />
        </div>
    )
}

export default AppointmentsComponent
