import React, { useRef, useState } from 'react';
import {signup} from '../../auth'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Gif_loading from '../../images/gif_loading.gif'


const RegisterComponent = () => {

    const [state, setState] = useState({
        show: false,
        error: "",
        open: false,
        loading: false
    })

    const email = useRef('');
    const password = useRef('');
    const password_confirmation = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({loading: true})
        const user = {
            email: email.current.value,
            password: password.current.value,
            password_confirmation: password_confirmation.current.value
        }

        if(user.email === '') {
            return setState({error: `Please fill in your email address`})
        }
        else if(user.password === '' || user.password === null || user.password === undefined){
            return setState({error: `Please fill in your security password`})
        }
        else if(user.password !== user.password_confirmation) {
            return setState({error: `Password do not match. Please Try again!`})
        }
        else {signup(user, setState)}
    }

    if(state.open) {
        email.current.value = ''
        password.current.value = ''
        password_confirmation.current.value = ''
    }


    return (
        <div className="container" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column', 
                paddingTop: '6.1rem', 
                width: '15rem', 
                // height: 'calc(100vh - 6rem)'
            }}>
            <h2 className="mt-5 mb-5">Signup</h2>


            <div className="alert alert-danger" style={{display: state.error ? '' : "none"}}>
                {state.error}
            </div>

            {state.loading &&
                <div className="loading-container">
                    <img src={Gif_loading} alt="loading" style={{width: '100%'}} loading="eager"/>
                    <h6 style={{fontWeight: 'bold'}}>Loading</h6>
                </div>
            }

            <div className="alert alert-info" style={{display: state.open ? '' : "none"}}>
                New account is successfully created. Please <Link to="/signin">Sign in</Link>.
            </div>
            
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input type="email" className="form-control" ref={email}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input type={state.show ? `text` : `password`} className="form-control" ref={password}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Confirm Password</label>
                    <input type={state.show ? `text` : `password`} className="form-control" ref={password_confirmation}/>
                </div>

                <Button className="button submit-button mt-3" type="submit" variant={`primary`} >Submit</Button>
            </form>  
        </div>
    )
}

export default RegisterComponent
