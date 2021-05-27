import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../images/ap-banner.png";
import "./AppointmentBanner.css";

const AppointmentBanner = () => {
  return (
    <section className="appointment-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={bannerImg} alt="doctor" />
          </div>
          <div className="col-md-7 text-white py-5">
            <h5 className="text-primary text-uppercase ">Appointment</h5>
            <h1 className="my-4">
              Make an Appointment <br /> Today
            </h1>
            <p>
			schedule your online veterinary consultation today and come join our family of 1000+ happily satisfied members. Let us serve you and make you count our strengths over other available pet doctors.
            </p>
            <Link to="/appointment">
              <button className="btn btn-primary button-style">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
