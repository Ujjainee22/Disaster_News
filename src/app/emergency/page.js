import React from "react";
/*import DownloadButton from "@/app/contact_emer/DownloadButton";*/
import styles from "@/app/emergency/emergency.module.css"
import Footer from "@/app/components/footer"


export const Page = () => {
  return (
    <><div className={styles.container}>
    <h1>🚨 EMERGENCY CONTACTS 🚨</h1>

    <div className={styles.grid_container}>
      <div className={styles.box}>
        <h2>General Emergency Numbers</h2>
        <ul>
          <li><strong>National Emergency Number</strong> – 📞 112</li>
          <li><strong>Police</strong> – 📞 100</li>
          <li><strong>Fire Brigade</strong> – 📞 101</li>
          <li><strong>Ambulance</strong> – 📞 102</li>
          <li><strong>Disaster Management (NDMA)</strong> – 📞 1078</li>
        </ul>
      </div>

      <div className={styles.box}>
        <h2>Disaster-Specific Helplines</h2>
        <ul>
          <li><strong>Earthquake, Flood, Landslide (NDMA)</strong> – 📞 1078</li>
          <li><strong>Cyclone & Tsunami (IMD)</strong> – 📞 1800-180-1717</li>
          <li><strong>Forest Fire (MoEFCC)</strong> – 📞 1926</li>
          <li><strong>Air & Chemical Disasters (NDRF)</strong> – 📞 011-24363260</li>
          <li><strong>Railway Accidents</strong> – 📞 139</li>
        </ul>
      </div>

      <div className={styles.box}>
        <h2>Government Disaster Agencies</h2>
        <ul>
          <li><strong>NDMA</strong> – <a href="https://www.ndma.gov.in">www.ndma.gov.in</a></li>
          <li><strong>IMD</strong> – <a href="https://mausam.imd.gov.in">www.mausam.imd.gov.in</a></li>
          <li><strong>NDRF</strong> – <a href="https://www.ndrf.gov.in">www.ndrf.gov.in</a></li>
          <li><strong>SDMAs</strong> – (State-specific websites)</li>
        </ul>
      </div>

      <div className={styles.box}>
        <h2>Health And Relief Support</h2>
        <ul>
          <li><strong>Indian Red Cross Society</strong> – <a href="https://www.indianredcross.org">www.indianredcross.org</a></li>
          <li><strong>National Health Helpline</strong> – 📞 1075</li>
        </ul>
      </div>
    </div>
  </div>  
  <Footer/>
  </>
  );
};

export default Page;
