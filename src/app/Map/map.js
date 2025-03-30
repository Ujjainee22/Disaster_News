"use client";

import React from "react";
import dynamic from "next/dynamic";
import Panel from "@/app/Map/component/panel"; // Fix import

// Dynamically import MapClick with SSR disabled
const MapClick = dynamic(() => import("./MapClick"), { ssr: false });

const Map = () => {
  return (
    <>
      <Panel />
      <MapClick />
    </>
  );
};

export default Map;