import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Styles from "@/app/content/herosection.module.css"
const herosection = () => {
  return (
    <div className={Styles.parent}>
      
    <div className={Styles.imageContainer}>
      <Image 
        src="/Stores/Black and White Minimalist News Magazine.png" 
        alt="page1" 
        layout="responsive" 
        width={50}
        height={60} 
        className={Styles.image1} 
      />
    </div>
    <div className={Styles.imageContainer}>
      <Image 
        src="/Stores/White Illustrated Environment Magazine.png" 
        alt="page2" 
        layout="responsive" 
        width={50} 
        height={50} 
        className={Styles.image2} 
      />
    </div>
  </div>
  )
}

export default herosection