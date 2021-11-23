import React from "react";
import "./country.css";
const Country = ({ stats }) => {
  return (
    <div className="country">
      <img
        src={`https://00.ifreesite.com/world-i/${stats.Country.toLowerCase()}_flag.png`}
        alt={stats.Country}
      ></img>
      <h2>{stats.Country}</h2>
      <div className="describe">
        <p>{`Active : ${stats.Active}`}</p>
        <p>{`Confirmed : ${stats.Confirmed}`}</p>
        <p>{`Deaths : ${stats.Deaths}`}</p>
        <p>{`Recovered : ${stats.Recovered}`}</p>
      </div>
    </div>
  );
};

export default Country;
