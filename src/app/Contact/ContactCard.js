import React from 'react'
import Link from "next/link"
import  styles from "@/app/Contact/contact.module.css"
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
const ContactCard = () => {
  return (
    <div className={styles.section}>
        <div className={styles.container}>
             <div className={styles.grid}>
                  <div className={styles.grid_card}>
                       <i> <MdEmail /></i>
                       <h2>Email</h2>
                       <p>Monday to Friday Expected</p>
                       <p className={styles.last_para}>response time: 72 hours</p>
                       <Link href="/">Send Email to Us</Link>
                    </div>

                    <div className={styles.grid_card}>
                       <i> <MdVoiceChat /></i>
                       <h2>Live Chat</h2>
                       <p>Weekays: 9AM-6PM</p>
                       <p className={styles.last_para}>Weekends: 9AM-5PM</p>
                       <Link href="/">Chat Now with Us</Link>
                    </div>

                    <div className={styles.grid_card}>
                       <i> <MdForum /></i>
                       <h2>Community Forum</h2>
                       <p>Monday to Friday Expected</p>
                       <p className={styles.last_para}>response time: 72 hours</p>
                       <Link href="/" className={styles.anchorLink}>Ask The Community</Link>
                    </div>

                  

             </div>
        </div>
    </div>
  )
}
 
export default ContactCard