"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/Map/component/panel.module.css";

const Panel = () => {
  const router = useRouter();
  const [selectDis, setSelectDis] = useState("Flood"); // Default selection

  const handleChange = (e) => {
    setSelectDis(e.target.value);
  };

  const handleSubmit = () => {
    if (selectDis) {
      router.push(`/Map?name=${selectDis}`);
    } else {
      alert("Please select a disaster type");
    }
  };

  const disasterOptions = ["Flood", "Earthquake", "Drought", "Cyclone", "Landslide", "Forest fire"];

  return (
    <>
    <div className={styles.sidebar}>
      <h2>MENU</h2>
      <fieldset className={styles.menu}>
        {disasterOptions.map((disaster) => (
          <label key={disaster} className={styles.menuItem}>
            <input
              type="radio"
              name="disaster"
              value={disaster}
              checked={selectDis === disaster}
              onChange={handleChange}
            />
            {disaster}
          </label>
        ))}
      </fieldset>
      <button className={styles.submitButton} onClick={handleSubmit}>SUBMIT</button>
    </div>
  </>
  );
};

export default Panel;
