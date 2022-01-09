import {Modal, Button, Form} from 'react-bootstrap'
import {useRef} from 'react'

const ValidationModalComponent = (props) => {
    const name = useRef('testt');
  
    const handleSubmit = (e) => {
        console.log(name.current.value)
        e.preventDefault();
        
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {(props.action === 'delete') && <p>Do you really want to {props.action} {props.name}'s account?</p>}
                {(props.action === 'edit') && 
                        // <form>
                        //     <p>Name: </p>
                        //     <p>Email: {props.data.email}</p>
                        //     <p>Address: {props.data.address}</p>
                        //     <p>Age: {props.data.age}</p>
                        //     <p>Phone number: {props.data.phone_num}</p>
                        // </form>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" ref={name} placeholder={props.data.name} value={name.current.value} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={props.data.email}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter an address" value={props.data.address} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="number" placeholder="Enter a phone number" value={props.data.phone_num} />
                            </Form.Group> */}

                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                    Submit
                            </Button>
                        </Form>
                }
                {(props.action === 'view') && 
                    
                    <>
                        <p>Name: {props.data.name}</p>
                        <p>Email: {props.data.email}</p>
                        <p>Address: {props.data.address}</p>
                        <p>Age: {props.data.age}</p>
                        <p>Phone number: {props.data.phone_num}</p>
                    </>
            }
            </Modal.Body>
            {props.action !== 'edit' && 
                <Modal.Footer>
                    <Button variant={props.btncolor} onClick={() => console.log('Confirm')}>Confirm</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            }
        </Modal>
    )
}

export default ValidationModalComponent
