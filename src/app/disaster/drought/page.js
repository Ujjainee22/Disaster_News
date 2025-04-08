import React from 'react'
import Image from "next/image"
import Styles from "@/app/disaster/disaster.module.css"
import MapButton from '@/app/components/mapbutton'
import Footer from "@/app/components/footer"


const page = () => {
  return (
    <>
    <div className={Styles.main} >
      <div className={Styles.background}>
      <Image src="/Stores/pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg"  alt=""layout='fill'/>
      </div>
 <MapButton/>
      <div><p className={Styles.head}>The Drought Prone Areas in India</p></div>
    <div className={Styles.divImg}>
     <Image src="/Stores/droughtMap.png" alt=""  width={600} height={600} className={Styles.img}/>
    
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default page