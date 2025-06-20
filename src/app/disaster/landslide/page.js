'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Styles from "@/app/disaster/disaster.module.css";
import Mapbutton from "@/app/components/mapbutton";
import Footer from "@/app/components/footer";
import Back from "@/app/disaster/backbutton";

const Page = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true); // load variable acts like a  flag
  // initially loading is always true 



  useEffect(() => {
    fetch('/Dbapi/LandSlide')
      .then(res => res.json())
      .then(data => {
        setInfo(data); 
        setLoading(false); // setting loading false initially
      })
  }, []);

if (loading) {
    return <div className={Styles.loadtext}>Loading...</div>; // print loading until loading is false
  }


  return (
    <>
      <div className={Styles.main}>
        <Back />
        <Mapbutton />
        <p className={Styles.head}>The Landslide Prone Areas in India</p>

        <div className={Styles.threeColumn}>
          {/* Left Column */}
          <div className={Styles.infoColumn}>
          
            {info.slice(0, Math.ceil(info.length / 2)).map((item, index) => (
              <div key={index} className={Styles.infoCard}>
                
                <strong>{item.name}</strong>
                <br></br>
               
                <p>{item.info}</p>
              </div>
            ))}
          </div>

          {/* Center Map */}
          <div className={Styles.mapContainer}>
            <Image 
              src="/Stores/LandSlideMap.png" 
              alt="Cyclone Map" 
              width={600} 
              height={500} 
              className={Styles.img} 
             
            />
          </div>

          {/* Right Column */}
          <div className={Styles.infoColumn}>
           
            {info.slice(Math.ceil(info.length / 2)).map((item, index) => (
             <div key={index} className={Styles.infoCard}>
                
                <strong>{item.name}</strong>
                <br></br>
              
                
                <p>{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;