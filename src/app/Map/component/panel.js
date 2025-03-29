"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const panel = () => {
  const router = useRouter();
  const [selectDis, setSelectDis] = useState("Flood"); // Default value

  const handleClick = (e) => {
    setSelectDis(e.target.value);
  };

  const DisasterSelect = () => {
    if (selectDis) {
      router.push(`/Map?name=${selectDis}`);
    } else {
      alert("Please select a disaster type");
    }
  };

  return (
    <div>
      <h1>SELECT</h1>
      <div>
        <label>
          <input
            type="radio"
            name="disaster"
            value="Flood"
            checked={selectDis === "Flood"} // Set default checked
            onChange={handleClick}
          />{" "}
          Flood
        </label>
        <label>
          <input
            type="radio"
            name="disaster"
            value="Earthquake"
            checked={selectDis === "Earthquake"}
            onChange={handleClick}
          />{" "}
          Earthquake
        </label>
        <label>
          <input
            type="radio"
            name="disaster"
            value="Drought"
            checked={selectDis === "Drought"}
            onChange={handleClick}
          />{" "}
          Drought
        </label>
        <label>
          <input
            type="radio"
            name="disaster"
            value="Cyclone"
            checked={selectDis === "Cyclone"}
            onChange={handleClick}
          />{" "}
          Cyclone
        </label>
        <label>
          <input
            type="radio"
            name="disaster"
            value="Landslide"
            checked={selectDis === "Landslide"}
            onChange={handleClick}
          />{" "}
          Landslide
        </label>
        <label>
          <input
            type="radio"
            name="disaster"
            value="Forest fire"
            checked={selectDis === "Forest fire"}
            onChange={handleClick}
          />{" "}
          Forest fire
        </label>
      </div>
      
      <button onClick={DisasterSelect}>Submit</button>
    </div>
  );
};

export default panel;