import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import Link from "next/link"
const backbutton = () => {
  return (
    <div>
        <Link href="/content">
        <button><IoArrowBackCircle /></button>
        </Link>
    </div>
  )
}

export default backbutton;