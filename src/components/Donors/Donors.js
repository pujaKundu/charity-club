import React, { useEffect, useState } from "react";
import Donor from "../Donor/Donor";
import "./Donors.css";

const Donors = () => {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setDonors(data));
  }, []);
  return (
    <div className="homepage">
      <div className="donors-container">
        {donors.map((donor) => (
          <Donor key={donor._id} donor={donor}></Donor>
        ))}
      </div>
      <div className="added-donors">
        <h1>Added Donors</h1>
      </div>
    </div>
  );
};

export default Donors;
