"use client";

import React from "react";
import dynamic from "next/dynamic";
import Panel from "@/app/Map/component/panel"; 
import Footer from "@/app/components/footer"



// Dynamically import MapClick with SSR disabled
const MapClick = dynamic(() => import("./MapClick"), { ssr: false });

const Map = () => {
  return (
    <>
    <div>
      <Panel />
      <MapClick />
      </div>
<Footer/>
    </>
  );
};

export default Map;