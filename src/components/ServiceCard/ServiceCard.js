import React from 'react';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const {name, picture, age, time} = props.service;
    return (
      <div className="serviceCard">
        <img src={picture} alt=""></img>
        <div className='display-data'>
          <h2>{name}</h2>
          <h3>Age:{age}</h3>
          <p>Duration:{time} Minute</p>
        </div>
        <button className="button">Add to list</button>
      </div>
    );
};

export default ServiceCard;