import React from 'react'
import MobileViewPatientComponent from './MobileViewPatientList'
import DesktopViewPatientList from './DesktopViewPatientList'
import './index.css'
import useHooks from './hooks'
import ValidationModalComponent from '../ValidationModal'


const PatientComponent = () => {
    const {PatientsList} = useHooks();
    const [state, setState] = React.useState({
        title: '',
        modalShow: false,
        action: '',
        btnColor: '',
    });

    const handleShowModal = (val, patient) => {
        if(val === "delete-details") {
            setState({
                title: 'Delete',
                modalShow: true, 
                action: 'delete',
                btnColor: 'danger'
            })
        } else if(val === 'edit-details') {
            setState({
                title: 'Edit',
                modalShow: true,
                action: 'edit', 
                btnColor: 'primary',
                data: patient
            })
        } else if(val === 'view-details') {
            setState({
                title: 'Details',
                modalShow: true,
                action: 'view', 
                btnColor: 'primary',
                data: patient
            })
        }
    }
    return (
        <div className="patient-list-container" style={{paddingTop: '6.1rem'}}>
            <div className="mobile-patient-component">
                <MobileViewPatientComponent PatientsList={PatientsList} handleShowModal={handleShowModal} /> 
            </div>
            <div className="desktop-patient-component">
                <DesktopViewPatientList PatientsList={PatientsList} /> 
            </div>
            {PatientsList.map((patient, index) => {
                return (
                    <ValidationModalComponent 
                        key={index} 
                        show={state.modalShow} 
                        action={state.action}
                        name={patient.name} 
                        btncolor={state.btnColor}
                        title={state.title}
                        data={state.data}
                        onHide={() => setState({...state, modalShow: false})}
                    />
                )
            })}
        </div>
    )
}

export default PatientComponent
