"use client";
import React, { useState } from "react";

const Panel = ({ onSubmit }) => {
  const [selectDis, setSelectDis] = useState("Flood"); // Default selection
  const [selectplc, set_selectplc] = useState("Delhi");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]); // Default before date
  const [afterDate, setAfterDate] = useState("2025-01-01"); // Default after date

  const handleChange = (e) => {
    setSelectDis(e.target.value);
  };

  const handleChangest = (e) => {
    set_selectplc(e.target.value);
  };

  const handleSubmit = () => {
    if (selectDis && selectplc) {
      onSubmit({
        disaster: selectDis,
        state: selectplc,
        before: selectedDate,
        after: afterDate,
      });
    } else {
      alert("Please select a disaster and state");
    }
  };

  const disasterOptions = [
    "Flood", "Earthquake", "Drought", "Cyclone", "Landslide", "Forest fire"
  ];

  const stateOptions = [
    "Delhi", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
    "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
    "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
    "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
    "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <div>
      <h2>MENU</h2>

      <div>
        <select value={selectDis} onChange={handleChange}>
          {disasterOptions.map((disaster) => (
            <option key={disaster} value={disaster}>
              {disaster}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select value={selectplc} onChange={handleChangest}>
          {stateOptions.map((plc) => (
            <option key={plc} value={plc}>
              {plc}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Select before date: </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Select after date: </label>
        <input
          type="date"
          value={afterDate}
          onChange={(e) => setAfterDate(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>SUBMIT</button>
    </div>
  );
};

export default Panel;