import React, { useEffect, useState } from 'react';
import profileImg from "./faceless.jpg";
import './Cart.css'
import Swal from "sweetalert2"


const Cart = ({cart}) => {
      
    const [time, setTime] = useState(0);
    useEffect(()=>{
      
       localStorage.setItem("time", JSON.stringify(time));
      console.log(time);
    
         
    },[time]);


    useEffect(()=>{
        localStorage.getItem("time",JSON.parse(time));
        setTime(time);
    },[time])

    // useEffect(()=>{
    //     const items = JSON.parse(localStorage.getItem('items'));
    //     if(items){
    //         setItem(items);
    //     }
    // },[]);

    let totalTime = 0;
    for(const service of cart){
        totalTime = totalTime + service.time;
    }
    
   
    const handleComplete =()=>{
        console.log('cliked');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Activity Saved",
          showConfirmButton: false,
          timer: 1500,
        });
    }

    return (
      <div>
        <div className="exercise-summary">
          <div className="profile">
            <img src={profileImg} alt=""></img>
            <h2>Mr. Jhon</h2>
          </div>
          <div className="physical-condition">
            <p>
              Weight
              <br /> 67kg
            </p>
            <p>
              Height
              <br />
              6.2
            </p>
            <p>
              Age
              <br /> 33yrs
            </p>
          </div>

          <div className="break-container">
            <p onClick={() => setTime(totalTime + 10)}>10m</p>
            <p onClick={() => setTime(totalTime + 20)}>20m</p>
            <p onClick={() => setTime(totalTime + 30)}>30m</p>
            <p onClick={() => setTime(totalTime + 40)}>40m</p>
            <p onClick={() => setTime(totalTime + 50)}>50m</p>
          </div>

          <div className="calculate-details">
            <h2>Exercise Details</h2>
            <div>
              <p>Exercise Time : {totalTime} Minute</p>
            </div>
            <div>
              <p>Break Time: {time} Minute</p>
            </div>
            <button onClick={handleComplete} className="activity-button">
              Activity Completed
            </button>
          </div>
        </div>
      </div>
    );
};

export default Cart;