import React, {useState} from 'react'
import { Button, OverlayTrigger, Tooltip, Table, Nav} from 'react-bootstrap';
import {BiDetail, BiEdit} from 'react-icons/bi'
import {RiDeleteBin2Line} from 'react-icons/ri'
import Moment from 'react-moment';
import {appointmentList, approvedAppointmentList, appointmentHistoryList} from '../api/api'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllAppointmentsComponent from './AllAppointments';
import ApprovedAppointmentsComponent from './ApprovedAppointments';
import HistoryAppointmentsComponent from './HistoryAppointments';
import {isAuthenticated} from '../../auth'




const DesktopViewPatientList = ({state, handleShowModal, setState}) => {


    const handleGetData = (value) => {
        console.log({value})
        // console.log(`schedule`, state.schedule)
        // setState({...state, appointmentTabs: value})
        if(window !== 'undefined') {
            localStorage.setItem('appointmentTab', value)
        }
        if(value === 0) {
            appointmentList(localStorage.getItem('allAppointmentRange'), isAuthenticated())
            .then(data => {
                console.log(data.appointments)
                if(data.status === "FAILED") {
                    return (
                        setState({error: data.status})
                    )
                } else return setState({...state, appointments: data.appointments, loading: false})
            })
        } else if(value === 1) {
            approvedAppointmentList(localStorage.getItem('approvedAppointmentRange'), isAuthenticated())
            .then(data => {
                console.log(data.appointments)
                if(data.status === "FAILED") {
                    return (
                        setState({error: data.status})
                    )
                } else return setState({...state, approvedAppointments: data.appointments, loading: false})
            })
        } else if(value === 2) {
            appointmentHistoryList('all', isAuthenticated())
            .then(data => { 
                console.log(data.appointments)
                if(data.status === "FAILED") {
                    return (
                        setState({error: data.status})
                    )
                } else return setState({...state, historyAppointments: data.appointments, loading: false})
            })
        }
    }

    const handleGetDataAllSchedule = (val) => {
        console.log(`appointment tab`, localStorage.getItem('appointmentTab'))
        console.log({val})
        if(window !== 'undefined') {
            localStorage.setItem('allAppointmentRange', val)
        }
        appointmentList(localStorage.getItem('allAppointmentRange'), isAuthenticated())
        .then(data => {
            console.log(data.appointments)
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, appointments: data.appointments, loading: false})
        })
    }

    const handleGetDataApprovedSchedule = (val) => {
        console.log(`appointment tab`, localStorage.getItem('appointmentTab') == 0)
        console.log({val})
        
        if(window !== 'undefined') {
            localStorage.setItem('approvedAppointmentRange', val)
        }
        approvedAppointmentList(localStorage.getItem('approvedAppointmentRange'), isAuthenticated())
        .then(data => {
            console.log(data.appointments)
            if(data.status === "FAILED") {
                return (
                    setState({error: data.status})
                )
            } else return setState({...state, approvedAppointments: data.appointments, loading: false})
        })
    }
    


    return (
        <div>
            <Tabs forceRenderTabPanel defaultIndex={localStorage.getItem('appointmentTab')}>
                <TabList>
                    <Tab onClick={() => handleGetData(0)}>All Booked</Tab>
                    <Tab onClick={() => handleGetData(1)}>Approved</Tab>
                    {!isAuthenticated().admin_email && <Tab onClick={() => handleGetData(2)}>History</Tab>}
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab onClick={() => handleGetDataAllSchedule('all')}>All</Tab>
                            <Tab onClick={() => handleGetDataAllSchedule('today')}>Today</Tab>
                            <Tab onClick={() => handleGetDataAllSchedule('week')}>Week</Tab>
                            <Tab onClick={() => handleGetDataAllSchedule('2weeks')}>2 Weeks</Tab>
                            <Tab onClick={() => handleGetDataAllSchedule('month')}>Month</Tab>
                        </TabList>
                        <AllAppointmentsComponent state={state} handleShowModal={handleShowModal} />
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab onClick={() => handleGetDataApprovedSchedule('all')}>All</Tab>
                            <Tab onClick={() => handleGetDataApprovedSchedule('today')}>Today</Tab>
                            <Tab onClick={() => handleGetDataApprovedSchedule('week')}>Week</Tab>
                            <Tab onClick={() => handleGetDataApprovedSchedule('2weeks')}>2 Weeks</Tab>
                            <Tab onClick={() => handleGetDataApprovedSchedule('month')}>Month</Tab>
                        </TabList>
                        <ApprovedAppointmentsComponent state={state} handleShowModal={handleShowModal} />
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        {/* <TabList>
                            <Tab onClick={() => handleGetDataApprovedSchedule('all')}>All</Tab>
                            <Tab onClick={() => handleGetDataApprovedSchedule('today')}>Today</Tab>
                            <Tab onClick={() => handleGetDataApprovedSchedule('week')}>Week</Tab>
                            <Tab onClick={() => handleGetDataApprovedSchedule('2weeks')}>2 Weeks</Tab>
                            <Tab onClick={() => handleGetDataApprovedSchedule('month')}>Month</Tab>
                        </TabList> */}
                        <HistoryAppointmentsComponent state={state} handleShowModal={handleShowModal} />
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default DesktopViewPatientList
