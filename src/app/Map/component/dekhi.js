"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Panel = () => {
  const router = useRouter();
  const [selectDis, setSelectDis] = useState("Flood"); // Default selection
  const [selectplc,set_selectplc]=useState("Delhi");
  const handleChange = (e) => {
    setSelectDis(e.target.value);
  };

  const handleChangest = (e) => {
    set_selectplc(e.target.value);
  };

  const handleSubmit = () => {
    if (selectDis && selectplc) {
      router.push(`/Map?name=${selectDis}&state=${selectplc}`);
    }
    else {
      alert("Please select a disaster type");
    }
  };

  const disasterOptions = ["Flood", "Earthquake", "Drought", "Cyclone", "Landslide", "Forest fire"];
  const stateOptions = ["Delhi","Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

  return (
    <>
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


        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
    </>
  );
};

export default Panel;
