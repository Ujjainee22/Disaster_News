import React from 'react'
import Image from "next/image"
import Styles from "@/app/disaster/disaster.module.css"
import Mapbutton from "@/app/components/mapbutton"
import Footer from "@/app/components/footer"
import Back from "@/app/disaster/backbutton"
const Page = () => {
  return (
    <>
     
    <div className={Styles.main} >
     <Back/>
      <Mapbutton/>
      <div><p className={Styles.head}>The Cyclone Prone Areas in India</p></div>
    <div className={Styles.divImg}>
     <Image src="/Stores/cycloneMap.png" alt=""  width={600} height={600} className={Styles.img} style="border:2px solid black;" />
    
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Page