import React from 'react';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const {picture, age, time} = props.service;
    return (
      <div className="serviceCard">
        <img src={picture} alt=""></img>
        <div className='display-data'>
          <h2>Age:{age}</h2>
          <h3>Duration:{time} Minute</h3>
        </div>
        <button className="button">Add to list</button>
      </div>
    );
};

export default ServiceCard;