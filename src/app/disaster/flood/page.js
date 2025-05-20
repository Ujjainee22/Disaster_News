import React from 'react'
import Image from "next/image"
import Styles from "@/app/disaster/disaster.module.css"
import MapButton from '@/app/components/mapbutton'
import Footer from "@/app/components/footer"
import Back from "@/app/disaster/backbutton"
const page = () => {
  return (
    <>
    <div className={Styles.main} >
          <Back/>
     <MapButton/>
      <div><p className={Styles.head}>The flood Prone Areas in India</p></div>
    <div className={Styles.divImg}>
     <Image src="/Stores/flood.png" alt=""  width={600} height={600} className={Styles.img}/>
    
    </div>
    </div>
    <Footer />
    </>
  )
}

export default page