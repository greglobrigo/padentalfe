import React, {useState, useEffect} from 'react'
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {BiDetail, BiEdit, BiTime} from 'react-icons/bi'
import {RiDeleteBin2Line} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'
import {CgDetailsLess} from 'react-icons/cg'
import {FaRegAddressBook} from 'react-icons/fa'
import {BsFillTelephoneFill, BsCalendarDateFill} from 'react-icons/bs'
import Gif_loading from '../../images/gif_loading.gif'
import InfiniteScroll from 'react-infinite-scroll-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'react-moment';


const MobileViewPatientListComponent = ({state, handleShowModal}) => {
    const [page, setPage] = useState(1)
    const notify = () => toast("Wow so easy!");


    return (
        <div className="container mt-5 mb-5" >
            <InfiniteScroll
                style={{ padding: '1rem' }}
                dataLength={state?.appointments.length} 
                next={() => setPage(page + 1)}
                hasMore={true}
                // loader={
                //     <div className="loading-container">
                //         <img src={Gif_loading} alt="loading" style={{width: '100%'}}/>
                //         <h6 style={{fontWeight: 'bold'}}>Loading</h6>
                //     </div>
                // }
            >
                {state?.approvedAppointmentsUser.map((appointment, index) => {
                    return (
                        <Card key={index} className="mobile-view-patient-details-container mb-3" md={6}>
                            <Card.Header style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{appointment.patient_name}</Card.Header>
                            <Card.Body style={{lineHeight: 'normal'}}>
                                <Card.Text style={{fontFamily: "Open Sans, Sans-serif", display: 'flex', alignItems: 'center'}}>
                                    <CgDetailsLess className="mobile-view-patient-details-icon" />Age: {appointment.age}
                                </Card.Text>
                                <Card.Text style={{fontFamily: "Open Sans, Sans-serif", display: 'flex', alignItems: 'center'}}>
                                    <FaRegAddressBook className="mobile-view-patient-details-icon" />
                                    Address: {appointment.address}
                                </Card.Text>
                                <Card.Text style={{fontFamily: "Open Sans, Sans-serif", display: 'flex', alignItems: 'center'}}>
                                    <BsFillTelephoneFill className="mobile-view-patient-details-icon" />Phone Number: {appointment.contact_number}
                                </Card.Text>
                                <Card.Text style={{fontFamily: "Open Sans, Sans-serif", display: 'flex', alignItems: 'center'}}>
                                    <BsCalendarDateFill className="mobile-view-patient-details-icon" />Preferred Date: {" "}<Moment format="MM/DD/YY">{appointment.preferred_date}</Moment>
                                </Card.Text>
                                <Card.Text style={{fontFamily: "Open Sans, Sans-serif", display: 'flex', alignItems: 'center'}}>
                                    <BiTime className="mobile-view-patient-details-icon" />Preferred Time: {" "}<Moment format="LT">{appointment.preferred_time}</Moment>
                                </Card.Text>
                                <div className="action-btns-container">
                                    <OverlayTrigger
                                        placement='bottom'
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                {`Show ${appointment.name}'s details`}
                                            </Tooltip>
                                        }
                                    >
                                        <Button variant="info" onClick={() => handleShowModal('view-details', appointment)}><BiDetail /></Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement='bottom'
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                {`Edit ${appointment.name}'s details`}
                                            </Tooltip>
                                        }
                                    >
                                        <Button variant="secondary"  onClick={() => handleShowModal('edit-details', appointment)}><BiEdit /></Button>
                                    </OverlayTrigger>
                                    {/* <OverlayTrigger
                                        placement='bottom'
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                {`Delete ${patient.name}'s details`}
                                            </Tooltip>
                                        }
                                    >
                                        <Button variant="danger" onClick={() => handleShowModal('delete-details')}><RiDeleteBin2Line /></Button>
                                    </OverlayTrigger> */}
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })}
            </InfiniteScroll>
            {/* <ToastComponent showA={showA}/> */}
            {/* <div>
                <button onClick={notify}>Notify!</button>
                <ToastContainer />
            </div> */}
        </div>
    )
}

export default MobileViewPatientListComponent
