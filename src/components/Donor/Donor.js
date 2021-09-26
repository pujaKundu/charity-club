import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhoneSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Donor.css";

const Donor = (props) => {
  const { name, age, image, occupation, address, donation_amount } =
    props.donor;
  //icons
  const element = <FontAwesomeIcon icon={faUser} />;
  const elementPhone = <FontAwesomeIcon icon={faPhoneSquare} />;
  const elementEnvelop = <FontAwesomeIcon icon={faEnvelope} />;
  return (
    <div className="donor-card">
      <div className="donor-img">
        <img src={image} alt="" />
      </div>
      <div className="donor-info">
        <h4 className="donor-name">{name}</h4>
        <p>
          <span>Occupation:</span> {occupation}
        </p>
        <p>
          <span>Age:</span> {age}
        </p>
        <p>
          <span>Address:</span> {address}
        </p>
        <p>
          <span>Donations:</span> {donation_amount} Taka
        </p>
        <button
          onClick={() => props.handleAddedDonor(props.donor)}
          className="donor-btn"
        >
          {element} Select Donor
        </button>
        <p className="icons">
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <span>{elementPhone}</span>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <span>{elementEnvelop}</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Donor;
