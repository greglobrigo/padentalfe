import React, {useRef, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {signin, adminSignin} from '../../auth'
import { Redirect } from 'react-router-dom'
import Gif_loading from '../../images/gif_loading.gif'
import {useLocation} from 'react-router-dom'




const SignInComponent = () => {
    const location = useLocation();
    const [state, setState] = useState({
        open: false,
        error: "",
        redirectToReferer: false,
        loading: false
    })


    const email = useRef('');
    const password = useRef('');


    const handleSubmit = (e) => {
        e.preventDefault();
        setState({loading: true})
        const user = {
            email: email.current.value,
            password: password.current.value,
        }

        if(location.pathname === '/admin') {
            adminSignin(user, state, setState)
        } else {
            signin(user, state, setState)
        }
    }


    if(state.open) {
        email.current.value = ''
        password.current.value = ''
    }

    if(state.redirectToReferer) {
        return <Redirect to="/" />
    }

    

    return (
        <div className="container" style={{display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column', 
                paddingTop: '6.1rem', 
                width: '15rem', 
                // height: 'calc(100vh - 6rem)'
            }}>

            <h1>{location.pathname === '/admin' ? 'Admin' : ''}</h1>
            <h2 className="mt-5 mb-5">Signin</h2>

            <div className="alert alert-danger" style={{display: state.error ? '' : "none"}}>
                {state.error}
            </div>

            {state.loading &&
                <div className="loading-container">
                    <img src={Gif_loading} alt="loading" style={{width: '100%'}} loading="eager"/>
                    <h6 style={{fontWeight: 'bold'}}>Loading</h6>
                </div>
            }

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={email}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={password}/>
                </Form.Group>

                {/* <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button> */}
                <Button className="button submit-button mt-3" type="submit" variant={`primary`} onClick={handleSubmit} >Submit</Button>
            </Form>
        </div>
    )
}

export default SignInComponent
