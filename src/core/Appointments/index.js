import React, {useEffect, useContext, useState} from 'react'
import './index.css'
import DesktopViewPatientList from './DesktopViewPatientList'
import {AppContext} from '../../Global/AppContext';
import {appointmentList, approvedAppointmentList} from '../api/api'
import Gif_loading from '../../images/gif_loading.gif'
import ValidationModalComponent from '../ValidationModal'
import {Dropdown} from 'react-bootstrap'
import MobileViewPatientComponent from './MobileViewPatientList'
import {isAuthenticated} from '../../auth'




const AppointmentsComponent = (props) => {
    const {state, setState} = useContext(AppContext)
    const [selectedValue, setSelectedValue] = useState('')


    useEffect(() => {
        setState({loading: true})
        appointmentList('all', isAuthenticated())
        .then(data => {
            console.log(data.appointments)
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, appointments: data.appointments, loading: false})
        })

        approvedAppointmentList('all', isAuthenticated())
        .then(data => {
            console.log(data.appointments)
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, approvedAppointments: data.appointments, loading: false})
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
        }
    }

    const handleSelectedValue = (e) => {
        setState({...state, loading: true})
        setSelectedValue(e.target.value)
        appointmentList(e.target.value, isAuthenticated())
        .then(data => {
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, appointments: data.appointments, loading: false})
        })

        approvedAppointmentList(e.target.value, isAuthenticated())
        .then(data => {
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, approvedAppointments: data.appointments, loading: false})
        })
    }


    return (
        <>
            <div className="container" style={{paddingTop: '9.1rem'}}>
                {state.loading || !state.appointments?
                    <div className="loading-container">
                        <img src={Gif_loading} alt="loading" style={{width: '100%'}}/>
                        <h6 style={{fontWeight: 'bold'}}>Loading</h6>
                    </div>
                    :
                    <>
                        <div className="desktop-patient-component">
                            <select className="select-appointments" value={selectedValue} onChange={(e) => handleSelectedValue(e)}>
                                <option value="all">All</option>
                                <option value="today">Today</option>
                                <option value="week">Week</option>
                                <option value="2weeks">2 Weeks</option>
                                <option value="month">Month</option>
                            </select>
                            <DesktopViewPatientList state={state} handleShowModal={handleShowModal} /> 
                        </div>
                        <div className="mobile-patient-component">
                            <MobileViewPatientComponent state={state} handleShowModal={handleShowModal} /> 
                        </div>
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
