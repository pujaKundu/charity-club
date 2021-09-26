import React from "react";
import "./AddedDonors.css";

const AddedDonors = (props) => {
  const { addedDonor } = props;
  //added donor informations
  let donorName = [];
  let displayDonorName;
  let total = 0;
  for (const donor of addedDonor) {
    //update total donations
    total += donor.donation_amount;
    //add donor name
    donorName.push(donor.name);
  }

  return (
    <div>
      <h1>Donors List</h1>
      <div className="donation-info">
        <h4>
          <span className="donor-text">Donors Added: </span>
          {props.addedDonor.length}
        </h4>
        <p>
          <span className="donor-text">Donor Name: </span>
        </p>
        {donorName.map((name) => (
          <p>
            <span className="added-donor-name">{name}</span>
            <hr />
          </p>
        ))}
      </div>
      <div>
        <h2>
          <span className="donor-text">Total Donation: </span>
          {total} Taka
        </h2>
      </div>
    </div>
  );
};

export default AddedDonors;
