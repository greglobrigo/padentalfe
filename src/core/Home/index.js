import React, {useEffect, useContext} from 'react'
import './index.css'
import {AppContext} from '../../Global/AppContext';
import BannerComponent from './Banner'
import ProfessionClinicComponent from './ProfessionClinic'
import ServicesComponent from './Services'
import ClinicProtocolComponent from './ClinicProtocol'
import ProcedureComponent from './Procedure'
import DetailsComponent from './Details'
import PopupComponent from '../Popup'
import BookOnlineComponent from './BookOnlineComponent'
import {appointmentList, approvedAppointmentList} from '../Admin/apiAdmin'



const Home = () => {
    const {state, setState} = useContext(AppContext)

    useEffect(() => {
        appointmentList('all')
        .then(data => {
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } 
            else return setState({...state, appointments: data.appointments, loading: false})
        })
        
        approvedAppointmentList('all')
        .then(data => {
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, approvedAppointments: data.appointments, loading: false})
        })
    }, [])

    console.log({state})
    
    return (
        <>
            <PopupComponent />
            <BannerComponent />
            <BookOnlineComponent />
            <ProfessionClinicComponent />
            <ServicesComponent />
            <ClinicProtocolComponent />
            <ProcedureComponent />
            <DetailsComponent />
        </>
    )
}

export default Home
