import React from 'react';
import "./Service.css"

const Service = (props) => {
    const {name , img , description} = props.service;
    return (
        <div className="col-md-4 mb-5 text-center">
            <img className="border__rad" src={img} alt="icon" width="50%" border-radius= "999px" />
            <h4 className="my-4 style-color" >{name}</h4>
            <p className="text-secondary">{description}</p>
        </div>
    );
};

export default Service;