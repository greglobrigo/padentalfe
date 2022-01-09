import React, {useEffect, useContext} from 'react'
import './index.css'
import {AppContext} from '../../Global/AppContext';
import BannerComponent from './Banner'
import ProfessionClinicComponent from './ProfessionClinic'
import ServicesComponent from './Services'
import ClinicProtocolComponent from './ClinicProtocol'
import ProcedureComponent from './Procedure'
import DetailsComponent from './Details'
import PopupComponent from '../Popup'
import BookOnlineComponent from './BookOnlineComponent'



const Home = () => {
    const {setState} = useContext(AppContext)

    useEffect(() => {
        setState({modalShow: true})
    }, [])
    
    return (
        <>
            <PopupComponent />
            <BannerComponent />
            <BookOnlineComponent />
            <ProfessionClinicComponent />
            <ServicesComponent />
            <ClinicProtocolComponent />
            <ProcedureComponent />
            <DetailsComponent />
        </>
    )
}

export default Home
