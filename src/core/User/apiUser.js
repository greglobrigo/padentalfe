export const appointmentList = (value) => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1/patients/appointments?dateRange=${value}`, {
        method: "GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}

export const approvedAppointmentList = (value, user) => {
    console.log(`THIS IS USER`,user.userToken)
    console.log(`THIS IS USER`,user.authToken)
    return fetch(`${process.env.REACT_APP_API_URL}/api/v1/patients/appointments/approved?dateRange=${value}`, {
        method: "GET",
        'Content-type': 'application/json',
        headers: {
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