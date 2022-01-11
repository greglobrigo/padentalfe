import axios from 'axios';

export const signup = async(user, setState) => {
    await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/api/v1/patients/registrations`,
        data: user,
        headers: {}, 
    })
    .then(response => {
         if(response.data.status === "FAILED") {
            return (
               setState({error: response.data.message})
            )
        } else return setState({user: response.data, open: true})
    })
    .catch(err => {
        console.log(`Signup Error:`, err)
    })
}

export const signin = async(user, state, setState) => {
    await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/api/v1/patients/sessions`,
        data: user,
        headers: {}, 
    })
    .then(response => {
        if(response.data.status === "FAILED") {
            return setState({error: response.data.message})
        } else {
            return (
                setState({user: response.data, loading: false, open: true}),
                authenticate(response.data, () => {
                    setState({...state, redirectToReferer: true})
                })
            )
        }
    })
    .catch(err => {
        console.err(`Signup Error:`, err)
    })
}

export const authenticate = (jwt, next) => {
    if(typeof window !== "undefined") {
        localStorage.setItem('jwt', JSON.stringify(jwt))
        next() 
    }
}

export const isAuthenticated = () => {
    if(typeof window == "undefined") {
        return false
    }
    if(localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }
}

export const signout = (next) => {
    if(typeof window !== 'undefined') localStorage.removeItem('jwt')
    next()
    // return fetch(`${process.env.REACT_APP_API_URL}/signout`, {
    //     method: "GET"
    // })
    // .then(response => {
    //     console.log('signout', response)
    //     return response.json()
    // })
    // .catch(err => console.log(`Signout Error:`, err))
}


export const adminSignin = async(user, state, setState) => {
    
    await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/api/v1/adminsessions`,
        data: user,
        headers: {}, 
    })
    .then(response => {
        if(response.data.status === "FAILED") {
            return setState({error: response.data.message})
        } else {
            return (
                setState({user: response.data, loading: false, open: true}),
                authenticate(response.data, () => {
                    setState({...state, redirectToReferer: true})
                })
            )
        }
    })
    .catch(err => {
        console.err(`Signup Error:`, err)
    })
}