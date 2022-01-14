import React, {useEffect, useContext} from 'react'
import './index.css'
import DesktopViewPatientList from './DesktopViewPatientList'
import {AppContext} from '../../Global/AppContext';
import {appointmentList, approvedAppointmentList, appointmentHistoryList} from '../api/api'
import Gif_loading from '../../images/gif_loading.gif'
import ValidationModalComponent from '../ValidationModal'
import {Dropdown} from 'react-bootstrap'
import MobileViewPatientComponent from './MobileViewPatientList'
import {isAuthenticated} from '../../auth'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'




const AppointmentsComponent = (props) => {
    const {state, setState} = useContext(AppContext)


    useEffect(() => {
        setState({loading: true})
        appointmentList('all', isAuthenticated())
        .then(data => {
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, appointments: data.appointments, loading: false})
        })

        approvedAppointmentList('all', isAuthenticated())
        .then(data => {
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, approvedAppointments: data.appointments, loading: false})
        })

        appointmentHistoryList('all', isAuthenticated())
        .then(data => {
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, historyAppointments: data.appointments, loading: false})
        })
    }, [])




    const handleShowModal = (val, appointment) => {
        // setState({...state, loading: true})
        if(val === "delete-details") {
            setState({...state, 
                title: 'Delete',
                modalShow: true, 
                action: 'delete',
                btnColor: 'danger',
                loading: false
            })
        } else if(val === 'edit-details') {
            setState({...state, 
                title: 'Edit',
                modalShow: true,
                action: 'edit', 
                btnColor: 'primary',
                data: appointment,
                loading: false
            })
        } else if(val === 'view-details') {
            setState({...state, 
                title: 'Details',
                modalShow: true,
                action: 'view', 
                btnColor: 'primary',
                data: appointment,
                loading: false
            })
        } else if(val === 'add-appointment') {
            console.log('testttttt')
            setState({...state, 
                title: 'New Appointment',
                modalShow: true,
                action: 'new', 
                btnColor: 'primary',
                loading: false
            })
        }
    }


    return (
        <>
            <div className="container" style={{paddingTop: '9.1rem'}}>
                {state.loading || !state.appointments || !state.approvedAppointments || !state.historyAppointments?
                    <div className="loading-container">
                        <img src={Gif_loading} alt="loading" style={{width: '100%'}}/>
                        <h6 style={{fontWeight: 'bold'}}>Loading</h6>
                    </div>
                    :
                    <>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h1>Appointments</h1>
                            <Link to="/appointments/new" ><Button variant="info">Add Appointment</Button></Link>
                        </div>
                        <div className="desktop-patient-component">
                            <DesktopViewPatientList state={state} handleShowModal={handleShowModal} setState={setState} /> 
                        </div>
                        {/* <div className="mobile-patient-component">
                            <MobileViewPatientComponent state={state} handleShowModal={handleShowModal} /> 
                        </div> */}
                    </>
                }
               
                    <ValidationModalComponent 
                        show={state.modalShow} 
                        action={state.action}
                        // name={state.data.patient_name} 
                        btncolor={state.btnColor}
                        title={state.title}
                        data={state.data}
                        onHide={() => setState({...state, modalShow: false})}
                    />

                            
            </div>
        </>
    )
}

export default AppointmentsComponent
