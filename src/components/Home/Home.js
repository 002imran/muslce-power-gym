import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import profileImg from './faceless.jpg';
import './Home.css'

const Home = () => {
   const [service, setService] = useState([]);

   useEffect(()=>{
      fetch('data.json')
      .then(res=> res.json())
      .then(data=>setService(data))
   },[])
   console.log(service);

    return (
      <div className="exercise-container">
        {/* <h1 className='heading'>Welcome To MusclePower GYM</h1> */}
        <div className="service-container">
          {service.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>

        <div className="exercise-summary">
          <div className='profile'>
            <img src={profileImg} alt=""></img>
            <h2>Mr. Jhon</h2>
          </div>
          <div className="physical-condition">
            <p>
              Weight
              <br />
              67kg
            </p>
            <p>
              Height
              <br /> 6.2
            </p>
            <p>
              Age
              <br /> 33yrs
            </p>
          </div>
        </div>
      </div>
    );
};

export default Home;