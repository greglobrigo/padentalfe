import React from 'react'
import { Button, OverlayTrigger, Tooltip, Table } from 'react-bootstrap';
import Moment from 'react-moment';
import {BiDetail, BiEdit} from 'react-icons/bi'
import {isAuthenticated} from '../../auth'

const HistoryAppointments = ({state, handleShowModal}) => {
    return (
        <Table striped bordered hover className="container">
                <thead>
                    <tr>
                        {isAuthenticated().admin_email && <th>Name</th>}
                        {isAuthenticated().admin_email && <th>Age</th>}
                        {isAuthenticated().admin_email && <th>Address</th>}
                        {isAuthenticated().admin_email && <th>Phone Number</th>}
                        <th>Schedule</th>
                        {isAuthenticated().admin_email && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {state?.historyAppointments.map((appointment, index) => {
                        return (
                            <tr key={index}>
                                {isAuthenticated().admin_email && <td>{appointment.patient_name}</td>}
                                {isAuthenticated().admin_email && <td>{appointment.age}</td>}
                                {isAuthenticated().admin_email && <td>{appointment.address}</td>}
                                {isAuthenticated().admin_email && <td>{appointment.contact_number}</td>}
                                <td>{(appointment.preferred_date && appointment.preferred_time) ? <><Moment format="MM/DD/YYYY">{appointment.preferred_date}</Moment> - <Moment format="LT">{appointment.preferred_time}</Moment></> : ''}</td>
                                {isAuthenticated().admin_email && 
                                (<td>
                                    <div className="action-btns-container">
                                        <OverlayTrigger
                                            placement='bottom'
                                            overlay={
                                                <Tooltip id={`tooltip-bottom`}>
                                                    {`Show Edit's details`}
                                                </Tooltip>
                                            }
                                        >
                                            <Button variant="info" onClick={() => handleShowModal('view-details', appointment)}><BiDetail /></Button>
                                        </OverlayTrigger>
                                        {/* <OverlayTrigger
                                            placement='bottom'
                                            overlay={
                                                <Tooltip id={`tooltip-bottom`}>
                                                    {`Edit view's details`}
                                                </Tooltip>
                                            }
                                        >
                                            <Button variant="secondary" onClick={() => handleShowModal('edit-details', appointment)}><BiEdit /></Button>
                                        </OverlayTrigger> */}
                                        {/* <OverlayTrigger
                                            placement='bottom'
                                            overlay={
                                                <Tooltip id={`tooltip-bottom`}>
                                                    {`Delete patient.name's details`}
                                                </Tooltip>
                                            }
                                        >
                                            <Button variant="danger"><RiDeleteBin2Line /></Button>
                                        </OverlayTrigger> */}
                                    </div>
                                </td>)
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
    )
}

export default HistoryAppointments
