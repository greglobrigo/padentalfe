import React from 'react'
import { Table } from 'react-bootstrap';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {BiDetail, BiEdit} from 'react-icons/bi'
import {RiDeleteBin2Line} from 'react-icons/ri'
import Moment from 'react-moment';




const DesktopViewPatientList = ({state, handleShowModal}) => {
    
    
    
    return (
        <div>
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
                    {state?.appointments.map((appointment, index) => {
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
        </div>
    )
}

export default DesktopViewPatientList
