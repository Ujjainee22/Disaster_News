import React from 'react'
import Image from "next/image"
import Styles from "@/app/disaster/disaster.module.css"
const page = () => {
  return (
    <div className={Styles.main} >
      <div className={Styles.background}>
      <Image src="/Stores/pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg"  alt=""layout='fill'/>
      </div>
     
      <div><p className={Styles.head}>The Landslide Prone Areas in India</p></div>
    <div className={Styles.divImg}>
     <Image src="/Stores/LandSlideMap.png" alt=""  width={600} height={600} className={Styles.img}/>
    
    </div>
    </div>
  )
}

export default page