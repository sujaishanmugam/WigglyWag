import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../images/banner-img.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-4">
            <h1>
			Your New Smile <br />  Starts Here 😀
            </h1>
            <p className="my-4">
              WigglyWag is India’s trusted online veterinary health care consultation service provider. India’s Experienced veterinarians on Standby to provide you reliable online veterinary consultation
              services. Make the appointment now!
            </p>
            <Link className="btn btn-primary button-style" to="/appointment">
              Make Appointment
            </Link>
          </div>
          <div className="col-md-6 d-none d-md-block offset-1">
            <img
              className="img"
              src={BannerImg}
              alt="banner-img"
              width="120%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
