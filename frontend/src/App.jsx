import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [sqft, setSqft] = useState(1000);
  const [bhk, setBhk] = useState(2);
  const [bath, setBath] = useState(2);
  const [location, setLocation] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/api/get_location_names")
      .then(response => {
        setLocations(response.data.locations);
      })
      .catch(error => {
        console.error("Error fetching location names:", error);
        setError("Error fetching location names.");
      });
  }, []);

  const handleEstimatePrice = () => {
    axios.post("/api/predict_home_price", {
      total_sqft: parseFloat(sqft),
      bhk: parseInt(bhk, 10),
      bath: parseInt(bath, 10),
      location: location
    })
    .then(response => {
      setEstimatedPrice(response.data.estimated_price);
      setError(null);
    })
    .catch(error => {
      console.error("Error estimating price:", error);
      setError("Error estimating price.");
    });
  };

  return (
    <div className="app-container">
      <div className="img"></div>
      <form className="form">
        <h2>Area (Square Feet)</h2>
        <input
          className="input-field"
          type="number"
          value={sqft}
          onChange={(e) => setSqft(e.target.value)}
        />
        <h2>Bedrooms (BHK)</h2>
        <div className="switch-field">
          {[1, 2, 3, 4, 5].map(value => (
            <React.Fragment key={value}>
              <input
                type="radio"
                id={`radio-bhk-${value}`}
                name="uiBHK"
                value={value}
                checked={bhk === value}
                onChange={() => setBhk(value)}
              />
              <label htmlFor={`radio-bhk-${value}`} className="radio-label">{value}</label>
            </React.Fragment>
          ))}
        </div>
      </form>

      <form className="form">
        <h2>Bath</h2>
        <div className="switch-field">
          {[1, 2, 3, 4, 5].map(value => (
            <React.Fragment key={value}>
              <input
                type="radio"
                id={`radio-bath-${value}`}
                name="uiBathrooms"
                value={value}
                checked={bath === value}
                onChange={() => setBath(value)}
              />
              <label htmlFor={`radio-bath-${value}`} className="radio-label">{value}</label>
            </React.Fragment>
          ))}
        </div>
        <h2>Location</h2>
        <div>
          <select
            className="select-field"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="" disabled>Choose a Location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <button
          className="estimate-button"
          type="button"
          onClick={handleEstimatePrice}
        >
          Estimate Price
        </button>
      </form>
      {estimatedPrice && (
        <div className="result">
          <h2>{estimatedPrice} Lakh</h2>
        </div>
      )}
      {error && (
        <div className="error">
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
