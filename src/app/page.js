import React from 'react'
import styles from "@/app/styles/home.module.css"
import Link from 'next/link'
import Nav from "@/app/components/nav"

const Home = () => {
  return (

    <main>
       <Nav />
      <section className={styles.hero}>
        <video autoPlay loop playsInline muted className={styles.videoBackground}>
          <source src="Stores\forestFire.mp4" type="video/mp4" />
        </video >

        <div className={styles.content}>
         <h1 className={styles.title}>
            Real-Time Disaster Updates</h1>
        <p className={styles.subtitle}>Get the latest news on disasters and emergencies in India.</p>
        <Link href="/content" className={styles.exploreButton}>Explore</Link>
      
  
        </div>
      </section>
    </main>
  );
}

export default Home