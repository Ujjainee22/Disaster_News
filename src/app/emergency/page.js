import React from "react";
import styles from "@/app/emergency/emergency.module.css";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export const Page = () => {
  return (
    <>
    <Header/>
      <div className={styles.pageWrapper}>
        <div className={styles.newspaperContainer}>
          <div className={styles.headlineRow}>
            <h1>
              <span className={styles.redText}>EMERGENCY</span><br />
              <span className={styles.blueText}>CONTACTS</span>
            </h1>
            <h2 className={styles.subheading}>
              KNOW WHO TO CALL WHEN IT MATTERS MOST,<br />
              YOUR LIFELINE DURING DISASTERS
            </h2>
          </div>

        <div className={styles.sectionGrid}>
          <div className={styles.newsSection}>
            <h2>General Emergency Numbers</h2>
            <ul>
              <li><strong>National Emergency Number</strong> – &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📞 112</li>
              <li><strong>Police</strong> – 📞 100</li>
              <li><strong>Fire Brigade</strong> – 📞 101</li>
              <li><strong>Ambulance</strong> – 📞 102</li>
              <li><strong>Disaster Management (NDMA)</strong> – 📞 1078</li>
            </ul>
          </div>

          <div className={styles.newsSection}>
            <h2>Disaster-Specific Helplines</h2>
            <ul>
              <li><strong>Earthquake, Flood, Landslide (NDMA)</strong> – 📞 1078</li>
              <li><strong>Cyclone & Tsunami (IMD)</strong> – 📞 1800-180-1717</li>
              <li><strong>Forest Fire (MoEFCC)</strong> – 📞 1926</li>
              <li><strong>Air & Chemical Disasters (NDRF)</strong> – 📞 011-24363260</li>
              <li><strong>Railway Accidents</strong> – 📞 139</li>
            </ul>
          </div>

          <div className={styles.newsSection}>
            <h2>Government Disaster Agencies</h2>
            <ul>
              <li><strong>NDMA</strong> – <a href="https://www.ndma.gov.in">www.ndma.gov.in</a></li>
              <li><strong>IMD</strong> – <a href="https://mausam.imd.gov.in">www.mausam.imd.gov.in</a></li>
              <li><strong>NDRF</strong> – <a href="https://www.ndrf.gov.in">www.ndrf.gov.in</a></li>
              <li><strong>SDMAs</strong> – (State-specific websites)</li>
            </ul>
          </div>

          <div className={styles.newsSection}>
            <h2>Health And Relief Support</h2>
            <ul>
              <li><strong>Indian Red Cross Society</strong> – <a href="https://www.indianredcross.org">www.indianredcross.org</a></li>
              <li><strong>National Health Helpline</strong> – 📞 1075</li>
            </ul>
          </div>
        </div>
        </div>

        <div className={styles.imageGrid}>
          <img src="/em1.webp" alt="Disaster Help 1" />
          <img src="/em4.jpg" alt="Disaster Help 4" />

          <img src="/em2.jfif" alt="Disaster Help 2" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
