import React from 'react'
import Image from "next/image"
import Styles from "@/app/disaster/disaster.module.css"
import Mapbutton from "@/app/components/mapbutton"
const Page = () => {
  return (
    <div className={Styles.main} >
      <div className={Styles.background}>
      <Image src="/Stores/pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg"  alt=""layout='fill'/>
      </div>
      <Mapbutton/>
      <div><p className={Styles.head}>The Cyclone Prone Areas in India</p></div>
    <div className={Styles.divImg}>
     <Image src="/Stores/cycloneMap.png" alt=""  width={600} height={600} className={Styles.img}/>
    
    </div>
    </div>
  )
}

export default Page