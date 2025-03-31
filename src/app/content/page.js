import React from 'react'
import Hero from "@/app/content/herosection"
import Nav from "@/app/content/nav"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import styles from "@/app/content/page.module.css"
import Link from 'next/link'

const page = () => {
  return (
    <div >
       
      <Header />
   <Nav/>
   <div className={styles.button_st}>
   <Link href="/Map" className={styles.mapButton}>Go To Map</Link>
   </div>
   <Hero />
   <Footer />
      </div>
      
   
  
  )
}

export default page