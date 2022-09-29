import React from 'react';
import profileImg from "./faceless.jpg";

const Cart = ({cart}) => {
    let totalTime = 0;
    for(const service of cart){
        totalTime = totalTime + service.time;
    }
    
    const handleBreak =()=>{
          console.log('eee');
    }
    return (
      <div>
        <div className="exercise-summary">
          <h2>Cart Length: {cart.length}</h2>
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
            <p onClick={handleBreak}>10s</p>
            <p>20s</p>
            <p>30s</p>
            <p>40s</p>
            <p>50s</p>
          </div>

          <div className="calculate-details">
            <h2>Exercise Details</h2>
            <div>
              <p>Exercise Time : {totalTime} Minute</p>
            </div>
            <div>
              <p>Break Time</p>
            </div>
            <button className="activity-button">Activity Completed</button>
          </div>
        </div>
      </div>
    );
};

export default Cart;