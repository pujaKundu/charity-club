import React from "react";
import "./Donor.css";

const Donor = (props) => {
  console.log(props.donor);
  const { name, age, image, occupation, address, donation_amount } =
    props.donor;
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
          <span>Donations:</span> {donation_amount}
        </p>
      </div>
    </div>
  );
};

export default Donor;
