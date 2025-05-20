import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import Link from "next/link";
import Styles from "@/app/disaster/disaster.module.css";

const BackButton = () => {
  return (
    <div className={Styles.backButtonWrapper}>
      <Link href="/content">
        <button className={Styles.backbutton}>
          <IoArrowBackCircle /> Back
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
