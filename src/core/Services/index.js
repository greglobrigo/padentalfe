import React from 'react';
import './index.css'
import {Row, Col, Button} from 'react-bootstrap';
import useHooks from './hooks'
import DentalLogo from '../../images/dental_logo.png'



const ServicesComponent = () => {
  const {Services} = useHooks()
  

  return (<div className="container" style={{paddingTop: '9.1rem'}}>
      <div className="menu-title-container">
          <h1 className="title menu-title" style={{marginBottom: 'unset'}}>Services</h1>
      </div>


      <div className="services-item-container">
        {Services.map(service => {
          return (
            <div className="services-item">
              <div>
                <img src={DentalLogo} alt="dental-clinic" className="logo services-img"/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <h3 style={{fontWeight: 'bold', marginBottom: 'unset'}} >{service.title}</h3>
                {service?.subservices && service?.subservices.map(subservice => {
                    return (
                      <h5 style={{fontWeight: 'bold', marginBottom: 'unset'}}>{subservice?.sub}</h5>
                    )
                  })
                }
                <p style={{marginBottom: 'unset'}}>{service.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      
    </div>);
};

export default ServicesComponent;
