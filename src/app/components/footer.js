import React from 'react';
import Link from 'next/link';
import styles from "@/app/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_section}>
          <h3>INFORMATION</h3>
          <ul>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">API</Link></li>
            <li><Link href="#">Search Trends</Link></li>
          </ul>
        </div>
        <div className={styles.footer_section}>
          <h3>LEGAL</h3>
          <ul>
            <li><Link href="#">Terms of Use</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Copyright Information</Link></li>
            <li><Link href="#">Cookies Policy</Link></li>
          </ul>
        </div>
        
        <div className={styles.footer_section}>
          <h3>SUPPORT</h3>
          <ul>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3>SOCIAL MEDIA</h3>
          <div className={styles.footer_social}>
            <Link href="#"><img src="/fb.webp" alt="Facebook" /></Link>
            <Link href="#"><img src="/insta.jpg" alt="Instagram" /></Link>
            <Link href="#"><img src="/twitter.png" alt="Twitter" /></Link>
            <Link href="#"><img src="/you.png" alt="Youtube" /></Link>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>Copyright © Disaster Management</p>
      </div>
    </footer>
  );
}
