import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="website-name">Charity Club</h1>
      <p className="quote">
        <span>
          `Making a donation is the ultimate sign of solidarity. Actions speak
          louder than words.`
        </span>
        -Ibrahim Hooper
      </p>
      <h2>Total Budget : 10,00,000 Taka</h2>
    </div>
  );
};

export default Header;
