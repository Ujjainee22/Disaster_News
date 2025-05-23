'use client';

import React from "react";
import styles from "@/app/styles/about.module.css";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className={styles.section}>
        <div className={styles.text}>
          <h1>Our Mission</h1>
          <p>Welcome to [Website's Name], a platform dedicated to providing real-time, multilingual disaster news from across India.</p>
          <p>India's linguistic and geographical diversity often makes disaster news fragmented and inaccessible. Our mission is to streamline disaster reporting by aggregating, organizing, and presenting real-time news in multiple languages on a unified platform, making critical information more accessible and actionable.</p>
        </div>
        <div className={styles.image} style={{ backgroundImage: "url('/ab4.webp')" }}></div>
      </section>

      <section className={styles.section}>
        <div className={styles.image} style={{ backgroundImage: "url('/lgfin.png')" }}></div>
        <div className={styles.text}>
          <h2>What We Do</h2>
          <ul>
            <li><strong>Automated News Aggregation:</strong> We collect disaster news from verified sources across India.</li>
            <li><strong>Multilingual Coverage:</strong> Updates in multiple Indian languages ensure accessibility.</li>
            <li><strong>Smart Categorization:</strong> News is sorted by disaster type, region, and severity.</li>
            <li><strong>Search & Filtering:</strong> Users can refine updates by type, location, and language.</li>
            <li><strong>Real-Time Updates:</strong> Our system continuously delivers the latest alerts.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h1>Why It Matters</h1>
          <p>Timely disaster news can save lives by enabling faster response, better preparedness, and informed decision-making. We help authorities, responders, and the public stay ahead of emergencies with fast, centralized updates.</p>
          <p style={{ fontWeight: "bold" }}>Stay updated! Stay aware! Stay safe.</p>
        </div>
        <div className={styles.image} style={{ backgroundImage: "url('/ab2.jpg')" }}></div>
      </section>

      <Footer />
    </>
  );
}
