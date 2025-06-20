import React from 'react'
import styles from "@/app/Contact/contact.module.css"
import ContactCard from "@/app/Contact/ContactCard"
import Footer from '../components/footer'
import Header from "@/app/components/header";
import Head from 'next/head';

const page = () => {
  return (
    <>
    <Header/>
    <div className={styles.container}>
    <ContactCard />
    </div>
   
    <Footer/> 
    </>
  )
}

export default page