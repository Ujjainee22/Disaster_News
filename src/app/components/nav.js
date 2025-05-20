"use client"

import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import React, { useState } from 'react';



const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <nav className={styles.navbar}>
    <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`${styles.navbarList} ${menuOpen ? styles.active : ''}`}>
      <li className={styles.navbarItem}>
        <Link className={styles.navbarLink} href="/">Home</Link>
      </li>
      <li className={styles.navbarItem}>
        <Link className={styles.navbarLink} href="/about">About Us</Link>
      </li>
      <li className={styles.navbarItem}>
        <Link className={styles.navbarLink} href="/precautions">Safety Measures</Link>
      </li>
      <li className={styles.navbarItem}>
        <Link className={styles.navbarLink} href="/emergency"> Emergency</Link>
      </li>
      <li className={styles.navbarItem}>
        <Link className={styles.navbarLink} href="/faqs"> Help</Link>
      </li>
      <li className={styles.navbarItem}>
          <Link href="/Map" className={styles.navbarLink}>View Map</Link>
        </li>
      
     </ul>
   </nav>
  )
}
export default Nav;