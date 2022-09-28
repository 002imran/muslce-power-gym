import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
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
         <div className='exercise-container'>
            {/* <h1 className='heading'>Welcome To MusclePower GYM</h1> */}
            <div className='service-container'>
                {
                    service.map(service=><ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>

            <div className="exercise-summary">
                <h3>Profile Name</h3>
            </div> 
        </div>
    );
};

export default Home;