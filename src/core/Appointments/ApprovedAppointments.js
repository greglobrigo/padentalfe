import React from 'react'
import { Button, OverlayTrigger, Tooltip, Table } from 'react-bootstrap';
import Moment from 'react-moment';
import {BiDetail, BiEdit} from 'react-icons/bi'



const ApprovedAppointment = ({state, handleShowModal}) => {
    return (
        <Table striped bordered hover className="container">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Schedule</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state?.approvedAppointments.map((appointment, index) => {
                        return (
                            <tr key={index}>
                                <td>{appointment.patient_name}</td>
                                <td>{appointment.age}</td>
                                <td>{appointment.address}</td>
                                <td>{appointment.contact_number}</td>
                                <td>{(appointment.preferred_date && appointment.preferred_time) ? <><Moment format="MM/DD/YY">{appointment.preferred_date}</Moment> - <Moment format="LT">{appointment.preferred_time}</Moment></> : ''}</td>
                                <td>
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
                                        <OverlayTrigger
                                            placement='bottom'
                                            overlay={
                                                <Tooltip id={`tooltip-bottom`}>
                                                    {`Edit view's details`}
                                                </Tooltip>
                                            }
                                        >
                                            <Button variant="secondary" onClick={() => handleShowModal('edit-details', appointment)}><BiEdit /></Button>
                                        </OverlayTrigger>
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
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
    )
}

export default ApprovedAppointment
