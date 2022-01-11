

export const appointmentList = (value) => {
    return fetch(`${process.env.REACT_APP_API_URL}api/v1/adminappointments?dateRange=${value}`, {
        method: "GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}