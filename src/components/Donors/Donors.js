import React, { useEffect, useState } from "react";
import AddedDonors from "../AddedDonors/AddedDonors";
import Donor from "../Donor/Donor";
import "./Donors.css";

const Donors = () => {
  const [addedDonor, setAddedDonor] = useState([]);
  const [donors, setDonors] = useState([]);
  // load data
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setDonors(data));
  }, []);
  // added donors button handler
  const handleAddedDonor = (donor) => {
    const newAddedDonor = [...addedDonor, donor];
    setAddedDonor(newAddedDonor);
  };
  return (
    <div className="homepage">
      <div className="donors-container">
        {donors.map((donor) => (
          <Donor
            key={donor._id}
            donor={donor}
            handleAddedDonor={handleAddedDonor}
          ></Donor>
        ))}
      </div>
      <div className="added-donors">
        <AddedDonors addedDonor={addedDonor}></AddedDonors>
      </div>
    </div>
  );
};

export default Donors;
