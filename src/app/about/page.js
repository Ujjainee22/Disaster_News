import React from "react";
import styles from "@/app/styles/about.module.css";
import Footer from "@/app/components/footer"
import Header from "@/app/components/header";

export default function AboutPage() {
  return (
    <>
    <Header/>
    <div className={styles.top}>
        <div className={styles.top_left}>
        <h1>Our Mission</h1>
        <p>Welcome to [Website's Name], a platform dedicated to providing real-time, multilingual disaster news from across India.</p>
        <p>India's linguistic and geographical diversity often makes disaster news fragmented and inaccessible. Our mission is to streamline disaster reporting by aggregating, organizing, and presenting real-time news in multiple languages on a unified platform, making critical information more accessible and actionable.</p>
        </div>
        <div className={styles.top_right}></div>
    </div>
    <div className={styles.center}>
        <div className={styles.center_left}>
         <h1 ></h1>
         
         <h1 >logo</h1>
       </div>

        <div className={styles.center_mid}>
        <h2>What We Do</h2>
        <ul>
          <li><strong>Automated News Aggregation:</strong> We employ web scraping and API integration to collect disaster news from verified sources across India.</li>
          <li><strong>Multilingual Coverage:</strong> Our system processes and delivers news updates in multiple Indian languages to ensure accessibility for diverse audiences.</li>
          <li><strong>Smart Categorization & Retrieval:</strong> News is classified based on disaster type, region, and severity, making it easy for users to find relevant updates.</li>
          <li><strong>Advanced Search & Filtering:</strong> Users can refine searches by disaster category, location, time, and language, ensuring quick access to relevant information.</li>
          <li><strong>Scalable Real-Time Updates:</strong> Our infrastructure supports continuous news updates, providing the latest information without delays.</li>
        </ul>
        </div>
        <div className={styles.center_right}></div>
    </div>
    <div className={styles.bottom}>
        <div className={styles.bottom_left}><p>Stay updated! Stay aware! Stay safe.</p></div>
        <div className={styles.bottom_right}>
        <h1>Why It Matters</h1>
        <p>Timely disaster news can save lives by enabling faster response, better preparedness, and informed decision-making. By centralizing disaster-related updates from various sources, we help government agencies, relief organizations, and the general public stay ahead of emergencies and coordinate responses more effectively.</p>
</div>

    </div>
    <Footer />
    </>
  )
}