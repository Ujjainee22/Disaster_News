import React from 'react'
import Link from "next/link"
import Styles from "@/app/styles/header.module.css"
const header = () => {
  return (
<div className={Styles.parent}>
  <ul className={Styles.list}>
    <li className={Styles.listItem}>
      <Link href="/" alt="" className={Styles.LinkItem}>Back</Link>
    </li>
    <li className={Styles.listItem}>
    <Link href="/" alt="" className={Styles.LinkItem}>logo</Link>
    </li>
      <Link href="" alt="" className={Styles.LinkItem}>Emergency Alert</Link>
    <li className={Styles.listItem}>
    <Link href="/emergency" alt="" className={Styles.LinkItem}>Emergency</Link>
    </li>
    <li className={Styles.listItem}>
    <Link href="" alt="" className={Styles.LinkItem}>Help</Link>
    </li>
  </ul>
</div>
  )
}

export default header