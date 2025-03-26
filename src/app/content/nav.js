import React from 'react'
import Styles from "@/app/content/nav.module.css"
import Link from "next/link"
import Image from 'next/image'
const nav = () => {
  return (
   <>
   <div className={Styles.parent}>
    <ul className={Styles.list}>
        <li className={Styles.listItem}>
        <Image src="/Stores/earthquake-1665878_1280.jpg" alt="" height="100" width="150"/>
        <Link href="/disaster/earthquake" className={Styles.LinkItem}>Earthquake</Link>
        </li>
        <li className={Styles.listItem}>
        <Image src="/Stores/pexels-dibakar-roy-2432543-19391751.jpg" alt="" height="100" width="150"/>
        <Link href="/disaster/flood" className={Styles.LinkItem}>
         Flood</Link>
           
        </li>
        <li className={Styles.listItem}>
        <Image src="/Stores/timo-volz-PM_TgUfDRvM-unsplash.jpg" alt="" height="100" width="150"/>
        <Link href="/disaster/landslide" className={Styles.LinkItem}>
        Landslide
        </Link>
        </li>
        <li className={Styles.listItem}>
        <Image src="/Stores/pexels-pixabay-60013.jpg" alt="" height="100" width="150" />
        <Link href="/disaster/drought" className={Styles.LinkItem}> Drought </Link>
        </li>
        <li className={Styles.listItem}>
        <Image src="/Stores/pexels-pixabay-76969.jpg" alt="" height="100" width="150"/>
        <Link href="/disaster/cyclone" className={Styles.LinkItem}> Cyclone
        </Link>
        </li>
        <li className={Styles.listItem}>
        <Image src="/Stores/egor-vikhrev--E6jqIGzgOY-unsplash.jpg"  alt="" height="100" width="150"/>
        <Link href="/disaster/forestfire" className={Styles.LinkItem}>
        Forest Fire
        </Link>
        </li>
    </ul>
   </div>
   </>
  )
}

export default nav