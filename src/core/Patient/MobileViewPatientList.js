import React, {useState, useEffect} from 'react'
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {BiDetail, BiEdit} from 'react-icons/bi'
import {RiDeleteBin2Line} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'
import {CgDetailsLess} from 'react-icons/cg'
import {FaRegAddressBook} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import Gif_loading from '../../images/gif_loading.gif'
import InfiniteScroll from 'react-infinite-scroll-component';



const MobileViewPatientListComponent = ({PatientsList, handleShowModal}) => {
    const [page, setPage] = useState(1)


    return (
        <div className="container mt-5 mb-5" >
            <InfiniteScroll
                style={{ padding: '1rem' }}
                dataLength={PatientsList.length} 
                next={() => setPage(page + 1)}
                hasMore={true}
                // loader={
                //     <div className="loading-container">
                //         <img src={Gif_loading} alt="loading" style={{width: '100%'}}/>
                //         <h6 style={{fontWeight: 'bold'}}>Loading</h6>
                //     </div>
                // }
            >
                {PatientsList.map((patient, index) => {
                    return (
                        <Card key={index} className="mobile-view-patient-details-container mb-3" md={6}>
                            <Card.Header style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{patient.name}</Card.Header>
                            <Card.Body style={{lineHeight: 'normal'}}>
                                <Card.Text style={{fontFamily: "Open Sans, Sans-serif", display: 'flex', alignItems: 'center'}}>
                                    <AiOutlineMail className="mobile-view-patient-details-icon" />Email Address: {patient.email}
                                </Card.Text>
                                <Card.Text style={{fontFamily: "Open Sans, Sans-serif", display: 'flex', alignItems: 'center'}}>
                                    <CgDetailsLess className="mobile-view-patient-details-icon" />Age: {patient.age}
                                </Card.Text>
                                <Card.Text style={{fontFamily: "Open Sans, Sans-serif", display: 'flex', alignItems: 'center'}}>
                                    <FaRegAddressBook className="mobile-view-patient-details-icon" />
                                    Address: {patient.address}
                                </Card.Text>
                                <Card.Text style={{fontFamily: "Open Sans, Sans-serif", display: 'flex', alignItems: 'center'}}>
                                    <BsFillTelephoneFill className="mobile-view-patient-details-icon" />Phone Number: {patient.phone_num}
                                </Card.Text>
                                <div className="action-btns-container">
                                    <OverlayTrigger
                                        placement='bottom'
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                {`Show ${patient.name}'s details`}
                                            </Tooltip>
                                        }
                                    >
                                        <Button variant="info" onClick={() => handleShowModal('view-details', patient)}><BiDetail /></Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement='bottom'
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                {`Edit ${patient.name}'s details`}
                                            </Tooltip>
                                        }
                                    >
                                        <Button variant="secondary"  onClick={() => handleShowModal('edit-details', patient)}><BiEdit /></Button>
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
        </div>
    )
}

export default MobileViewPatientListComponent
