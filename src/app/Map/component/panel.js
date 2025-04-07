"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Panel = ({ onSubmit }) => {
  const [selectDis, setSelectDis] = useState("Flood"); // Default selection
  const [selectplc, set_selectplc] = useState("Delhi");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [afterDate, setAfterDate] = useState(new Date("2023-01-01")); 

  const handleChange = (e) => {
    setSelectDis(e.target.value);
  };

  const handleChangest = (e) => {
    set_selectplc(e.target.value);
  };

  const handleSubmit = () => {
    if (selectDis && selectplc) {
      const formattedBefore = selectedDate.toISOString().split("T")[0];
      const formattedAfter = afterDate.toISOString().split("T")[0];

      onSubmit({
        disaster: selectDis,
        state: selectplc,
        before: formattedBefore,
        after: formattedAfter,
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
        <p>Select before date:</p>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
        <p>Selected before date: {selectedDate.toDateString()}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <p>Select after date:</p>
        <Calendar onChange={setAfterDate} value={afterDate} />
        <p>Selected after date: {afterDate.toDateString()}</p>
      </div>

      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default Panel;