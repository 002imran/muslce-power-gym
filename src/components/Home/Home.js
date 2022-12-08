import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import ServiceCard from '../ServiceCard/ServiceCard';

import './Home.css'


const Home = () => {


  // const [service, setService] = useState([]);
  const [service, setService] = useState([]);
  //  const [cart, setCart] = useState([]);
   const [cart, setCart] = useState([]);

   useEffect(()=>{
      fetch('data.json')
      .then(res=> res.json())
      .then(data=>setService(data))
   },[])
  //  console.log(service);

   const handleCart = (service)=>{
    // console.log(service.time);
    const newCart = [...cart, service]
    setCart(newCart)
   }


   
   //set local storage
   useEffect(()=>{
      localStorage.setItem("excercie-time", JSON.stringify(service));
      
   },[service])

    return (
      <div className="exercise-container">
        {/* <h1 className='heading'>Welcome To MusclePower GYM</h1> */}
        <div className="service-container">
          {service.map((service) => (
            <ServiceCard key={service.id} service={service} handleCart={handleCart}></ServiceCard>
          ))}
        </div>

        <div className="exercise-cart-container">
        
         
          <Cart cart={cart}></Cart>

        </div>

        <Blog></Blog>
      </div>
      
    );
};

export default Home;