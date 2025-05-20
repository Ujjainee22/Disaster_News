//dropdownload panel
"use client";
import React, { useState } from "react";
import styles from "@/app/Map/component/panel.module.css";

const Panel = ({ onSubmit }) => {
  const [selectDis, setSelectDis] = useState("Flood");
  const [selectplc, set_selectplc] = useState("Delhi");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [afterDate, setAfterDate] = useState("2025-01-01");

  const handleChange = (e) => setSelectDis(e.target.value);
  const handleChangest = (e) => set_selectplc(e.target.value);

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
    <>
   
    <div className={styles.sidebar}>
      <h2>MENU</h2>

      <div className={styles.menu}>
        <div className={styles.menuItem}>
         
          <label htmlFor="disaster">Select Disaster:</label>
          <select
            id="disaster"
            value={selectDis}
            onChange={handleChange}
          >
            {disasterOptions.map((disaster) => (
              <option key={disaster} value={disaster}>
                {disaster}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.menuItem}>
          <label htmlFor="place">Select State:</label>
          <select
            id="place"
            value={selectplc}
            onChange={handleChangest}
          >
            {stateOptions.map((plc) => (
              <option key={plc} value={plc}>
                {plc}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.menuItem}>
          <label htmlFor="before">Select Before Date:</label>
          <input
            id="before"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className={styles.menuItem}>
          <label htmlFor="after">Select After Date:</label>
          <input
            id="after"
            type="date"
            value={afterDate}
            onChange={(e) => setAfterDate(e.target.value)}
          />
        </div>

        

        <button className={styles.submitButton} onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
    </>
  );
};

export default Panel;
