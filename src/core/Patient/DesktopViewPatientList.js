import React from 'react'
import { Table } from 'react-bootstrap';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {BiDetail, BiEdit} from 'react-icons/bi'
import {RiDeleteBin2Line} from 'react-icons/ri'




const DesktopViewPatientList = () => {
    return (
        <div style={{paddingTop: '3rem'}}>
            <Table striped bordered hover className="container">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john_doe@gmail.com</td>
                        <td>26</td>
                        <td>Capital City yeah!</td>
                        <td>09999999</td>
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
                                    <Button variant="info"><BiDetail /></Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement='bottom'
                                    overlay={
                                        <Tooltip id={`tooltip-bottom`}>
                                            {`Edit view's details`}
                                        </Tooltip>
                                    }
                                >
                                    <Button variant="secondary"><BiEdit /></Button>
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
                </tbody>
            </Table>
        </div>
    )
}

export default DesktopViewPatientList
