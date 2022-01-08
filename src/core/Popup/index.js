import React, {useContext} from 'react'
import {Modal, Button} from 'react-bootstrap';
import {AppContext} from '../../Global/AppContext';
import info_form from '../../images/info-form.png'
import calling from '../../images/calling.png'


const PopupComponent = () => {
    const {state, setState} = useContext(AppContext)
    
    const MyVerticallyCenteredModal = (props) => {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter" style={{fontWeight: 'bold'}}>
                Getting An Appointment
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{textAlign: 'center', background: 'rgba(78, 180, 81, 0.3)', padding: '1rem'}}>
                <img src={info_form} alt="dental-clinic" className="logo" loading="eager"/>
                <h5><strong><i>1. Fill up initial information sheet</i></strong></h5>
                <p>
                  Click the 'Make an Appointment' button and then fill up the form, then click 'Submit'. We encourage you to fill the items with all honesty for the sake of everyone's safety.
                </p>
              </div>
              <div style={{textAlign: 'center', background: 'rgba(90, 175, 176, 0.3)', padding: '1rem'}}>
                <img src={calling} alt="dental-clinic" className="logo" loading="eager"/>
                <h5><strong><i>2. Initial Consultation</i></strong></h5>
                <p>
                  After reviewing the forms you submitted, we will contact you prior to your appointed schedule for other necessary information needed to limit your stay in the clinic. Please wait for your appointment to be approved.
                </p>
              </div>
              {/* <div style={{background: 'rgba(80, 130, 200, 0.3)', padding: '1rem'}}>
                <h5><strong><i>3. Initial Consultation</i></strong></h5>
                <p>
                  After reviewing the forms you submitted, we will contact you prior to your appointed schedule for other necessary information needed to limit your stay in the clinic. Please wait for your appointment to be approved.
                </p>
              </div> */}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide} style={{color: '#062d92', background: 'linear-gradient(90deg, rgba(90, 175, 196, 1) 0%, rgba(232, 232, 244, 1) 50%, rgba(78, 180, 81, 1) 100% )'}}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <>
            {/* <Button variant="primary" onClick={() => setState({modalShow: true})}>
                Launch vertically centered modal
            </Button> */}

            <MyVerticallyCenteredModal
                show={state.modalShow}
                onHide={() => setState({modalShow: false})}
            />
        </>
    )
}

export default PopupComponent
