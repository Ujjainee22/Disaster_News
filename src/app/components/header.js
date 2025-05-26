'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { IoArrowBackCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Styles from "@/app/styles/header.module.css";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className={Styles.parent}>
      <div className={Styles.menuToggle} onClick={toggleMenu}>
        <GiHamburgerMenu size={26} />
      </div>
      <ul className={`${Styles.list} ${menuOpen ? Styles.showMenu : ''}`}>
        <li className={Styles.listItem}>
          <a href="#" onClick={handleBack} className={Styles.LinkItem}>
            <IoArrowBackCircle size={30} />
          </a>
        </li>
        <li className={Styles.listItem}>
          <div className={Styles.logoContainer}>
            <img src="/logo1.png" alt="Website Logo" className={Styles.logoImage} />
          </div>
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
        <li className={Styles.listItem}>
          <Link href="/about" className={Styles.LinkItem}>About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
