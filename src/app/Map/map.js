"use client";

import React from "react";
import dynamic from "next/dynamic";
import Panel from "@/app/Map/component/panel"; 
import { useState } from "react";


// Dynamically import MapClick with SSR disabled
const MapClick = dynamic(() => import("./MapClick"), { ssr: false });

const Map = () => {
  const [formData, setFormData] = useState(null);

  return (
    <div>
      <Panel onSubmit={setFormData} />
      <MapClick data={formData} />
    </div>
  );
};

export default Map;