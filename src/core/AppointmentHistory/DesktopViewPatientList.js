import React from 'react'
import { Button, OverlayTrigger, Tooltip, Tabs, Tab, Table} from 'react-bootstrap';
import {BiDetail, BiEdit} from 'react-icons/bi'
import {RiDeleteBin2Line} from 'react-icons/ri'
import Moment from 'react-moment';
import AllAppointmentsComponent from './AllAppointments';
import ApprovedAppointmentsComponent from './ApprovedAppointments';




const DesktopViewPatientList = ({state, handleShowModal}) => {
    
    
    
    return (
        <div>
            <h1>Appointments</h1>
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="all" title="All">
                    <AllAppointmentsComponent state={state} handleShowModal={handleShowModal} />
                </Tab>
                <Tab eventKey="approved" title="Approved">
                    <ApprovedAppointmentsComponent state={state} handleShowModal={handleShowModal} />
                </Tab>
            </Tabs>
        </div>
    )
}

export default DesktopViewPatientList
