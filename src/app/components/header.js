'use client';

import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { IoArrowBackCircle } from "react-icons/io5";
import Styles from "@/app/styles/header.module.css";

const Header = () => {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back(); // Go to previous page
  };

  return (
    <div className={Styles.parent}>
      <ul className={Styles.list}>
        <li className={Styles.listItem}>
          <a href="#" onClick={handleBack} className={Styles.LinkItem}>
            <IoArrowBackCircle size={30} />
          </a>
        </li>
        <li className={Styles.listItem}>
          <Link href="/content" className={Styles.LinkItem}>logo</Link>
        </li>
        <li className={Styles.listItem}>
          <Link href="/" className={Styles.LinkItem}>Explore</Link>
        </li>
        <li className={Styles.listItem}>
          <Link href="/emergency" className={Styles.LinkItem}>Emergency</Link>
        </li>
        <li className={Styles.listItem}>
          <Link href="/precautions" className={Styles.LinkItem}>Safety Measures</Link>
        </li>
        <li className={Styles.listItem}>
          <Link href="/Map" className={Styles.LinkItem}>View Map</Link>
        </li>
        <li className={Styles.listItem}>
          <Link href="/faqs" className={Styles.LinkItem}>Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
