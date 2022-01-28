import {isAuthenticated} from '../../auth'
import axios from 'axios'

export const appointmentList = (value, user) => {
    if(isAuthenticated().admin_email) {
        return fetch(`${process.env.REACT_APP_API_URL}/api/v1/adminappointments?dateRange=${value}`, {
            method: "GET",
        })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
    } else if(isAuthenticated().patient_email) {
        return fetch(`${process.env.REACT_APP_API_URL}/api/v1/patients/appointments?dateRange=${value}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'userToken': user.userToken,
                'authToken': user.authToken,
            }
        })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const approvedAppointmentList = (value, state, setState) => {
    console.log({value})
    setState({...state, loading: true})
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1/adminappointments/approved?dateRange=${value}`, {
        method: "GET",
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        if(data.status === "FAILED") {
            return (
                setState({error: data.status})
            )
        } else return setState({...state, historyAppointments: data.appointments, loading: false})
    })
    .catch(err => {
        console.log(err)
    })
}


export const appointmentHistoryList = (value, user) => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1/patients/appointments?dateRange=${value}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'userToken': user.userToken,
            'authToken': user.authToken,
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}


export const bookAppointment = async(data, user, state, setState, notifyWarning, notifySuccess) => {
    setState({...state, loading: true})
    await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/api/v1/patients/appointments`,
        data: data,
        headers: {
            'userToken': user.userToken,
            'authToken': user.authToken,
        }
    })
    .then(response => {
        return response
    })
    .then(data => {
        if(data.data.status === "FAILED") {
            return (
                setState({...state, error: data.status}),
                notifyWarning(data.data.errors[0])
            )
        } else if (data.data.status === "SUCCESS") {
            return (
                notifySuccess(data.data.message),
                setState({...state,
                    patient_name: '', 
                    address: '',
                    work: '',
                    note: '',
                    age: '',
                    contact: '',
                    preferred_time: '',
                    preferred_date: '',
                    have_cough: '',
                    have_colds: '', 
                    have_diarrhea: '',
                    have_sorethroat: '',
                    have_bodyache: '',
                    have_headache: '',
                    have_hightemp: '',
                    have_difficultbreathing: '',
                    have_fatigue: '',
                    have_travelledPast14days: '',
                    have_travelledWhereCovid: '',
                    have_vicinityWhereCovid: '',
                    loading: false, 
                    redirectToAppointments: true
                })
            )
        }
    })
    .catch(err => {
        console.log(`Signup Error:`, err)
    })
}


export const updateAppointmentStatus = async(id, status, state, setState) => {
    setState({...state, loading: true})
    await axios({
        method: 'PATCH',
        url: `${process.env.REACT_APP_API_URL}/api/v1/adminappointments?appointmentId=${id}&appointmentStatus=${status}`,
    })
    .then(response => {
        return response
    })
    .catch(err => {
        console.log(`Signup Error:`, err)
    })
}

export const addComment = async(id, value, state, setState) => {
    setState({...state, loading: true})
    await axios({
        method: 'PATCH',
        url: `${process.env.REACT_APP_API_URL}/api/v1/adminappointments/reschedule?appointmentId=${id}&comment=${value}`,
    })
    .then(response => {
        return response
    })
    .catch(err => {
        console.log(`Signup Error:`, err)
    })
}
