"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Panel from "@/app/Map/component/panel"; 
import styles from "@/app/Map/map.module.css";

const MapClick = dynamic(() => import("./MapClick"), { ssr: false });

const Map = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(true);
  const [formData, setFormData] = useState(null);

  return (
    <div className={styles.mapContainer}>
      {/* Toggle button visible only on smaller screens via CSS */}
      <button
        onClick={() => setIsPanelVisible(!isPanelVisible)}
        className={styles.toggleButton}
        aria-expanded={isPanelVisible}
        aria-controls="panel"
      >
        {isPanelVisible ? "Hide Panel" : "Show Panel"}
      </button>

      <div
        id="panel"
        className={!isPanelVisible ? styles.hiddenPanel : ""}
      >
        <Panel onSubmit={setFormData} />
      </div>

      <div className={styles.mapWrapper}>
        <div className={styles.mapInner}>
          <MapClick data={formData} />
        </div>
      </div>
    </div>
  );
};

export default Map;
