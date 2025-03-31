import React from 'react'
import styles from "@/app/contact/contact.module.css"
import ContactCard from "@/app/Contact/ContactCard"
import Footer from '../components/footer'
const page = () => {
  return (
    <>
    <div className={styles.container}>
    <ContactCard />
    </div>
   
    <Footer/> 
    </>
  )
}

export default page