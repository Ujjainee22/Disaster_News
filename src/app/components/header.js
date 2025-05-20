import React from 'react'
import Link from "next/link"
import Styles from "@/app/styles/header.module.css"
import { IoArrowBackCircle } from "react-icons/io5";

const header = () => {
  return (
<div className={Styles.parent}>
  <ul className={Styles.list}>
    <li className={Styles.listItem}>
      <Link href="/" alt="" className={Styles.LinkItem}><IoArrowBackCircle size={30}/>

      </Link>
    </li>
    <li className={Styles.listItem}>
    <Link href="/" alt="" className={Styles.LinkItem}>logo</Link>
    </li>

    <li className={Styles.listItem}>
    <Link href="/content" alt="" className={Styles.LinkItem}>Explore</Link>
    </li>

    


    <li className={Styles.listItem}>
    <Link href="/emergency" alt="" className={Styles.LinkItem}>Emergency</Link>
    </li>

    <li className={Styles.listItem}>
    <Link href="/precautions" alt="" className={Styles.LinkItem}>Safety Measures</Link>
    </li>

    <li className={Styles.listItem}>
    <Link href="/Map" alt="" className={Styles.LinkItem}>View Map</Link>
    </li>
    <li className={Styles.listItem}>
    <Link href="/faqs" alt="" className={Styles.LinkItem}>Help</Link>
    </li>
  </ul>
</div>
  )
}

export default header