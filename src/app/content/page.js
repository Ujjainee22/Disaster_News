import React from 'react'
import Hero from "@/app/content/herosection"
import Nav from "@/app/content/nav"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Styles from "@/app/content/page.module.css"
const page = () => {
  return (
    <div >
       
      <Header />
   <Nav/>
   <Hero />
   <Footer />
      </div>
      
   
  
  )
}

export default page