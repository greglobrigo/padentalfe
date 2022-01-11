import React, {useEffect, useContext, useState} from 'react'
import DesktopViewPatientList from './DesktopViewPatientList'
import {AppContext} from '../../Global/AppContext';
import {appointmentList} from '../Admin/apiAdmin'
import Gif_loading from '../../images/gif_loading.gif'
import ValidationModalComponent from '../ValidationModal'
import {Dropdown} from 'react-bootstrap'



const AppointmentsComponent = (props) => {
    const {state, setState} = useContext(AppContext)
    const [selectedValue, setSelectedValue] = useState('')

    useEffect(() => {
        setState({loading: true})
        appointmentList('all')
        .then(data => {
            console.log(data.appointments)
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, appointments: data.appointments, loading: false})
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
        setSelectedValue(e.target.value)
        appointmentList(e.target.value)
        .then(data => {
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, appointments: data.appointments, loading: false})
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
                            {/* <Dropdown style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Action</Dropdown.Item>
                                    <Dropdown.Item>Another action</Dropdown.Item>
                                    <Dropdown.Item>Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                            <select value={selectedValue} onChange={(e) => handleSelectedValue(e)}>
                                <option value="all">All</option>
                                <option value="today">Today</option>
                                <option value="week">Week</option>
                                <option value="2weeks">2 Weeks</option>
                                <option value="month">Month</option>
                            </select>
                            <DesktopViewPatientList state={state} handleShowModal={handleShowModal} /> 
                        </div>
                        
                    </>
                }
                {/* <div className="mobile-patient-component">
                    <MobileViewPatientComponent PatientsList={PatientsList} handleShowModal={handleShowModal} /> 
                    </div> */}


                    {/* {state.appointments.map((appointment, index) => {
                            return ( */}
                                <ValidationModalComponent 
                                    // key={index} 
                                    show={state.modalShow} 
                                    action={state.action}
                                    // name={state.data.patient_name} 
                                    btncolor={state.btnColor}
                                    title={state.title}
                                    data={state.data}
                                    onHide={() => setState({...state, modalShow: false})}
                                />
                            {/* )
                        })} */}

                            
            </div>
        </>
    )
}

export default AppointmentsComponent
