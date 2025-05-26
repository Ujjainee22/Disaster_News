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
    fetch('/Dbapi/Cyclone')
      .then(res => res.json())
      .then(data => {
        setInfo(data); 
        setLoading(false); // setting loading false initially
      })
  }, []);

if (loading) {
    return <p >Loading...</p>; // print loading until loading is false
  }

   // now come to this part
  return (
    <>
      <div className={Styles.main}>
        <Back />
        <Mapbutton />
        <p className={Styles.head}>The Cyclone Prone Areas in India</p>

        <div className={Styles.threeColumn}>
          {/* Left Column */}
          <div className={Styles.infoColumn}>
          
            {info.slice(0, Math.ceil(info.length / 2)).map((item, index) => (
              <div key={index} className={Styles.infoCard}>
                
                <strong>{item.name}</strong>
                <br></br>
                <strong>States affected:</strong> {item.states}
                <br></br>
               
                <p>{item.info}</p>
              </div>
            ))}
          </div>

          {/* Center Map */}
          <div className={Styles.mapContainer}>
            <Image 
              src="/Stores/cycloneMap.png" 
              alt="Cyclone Map" 
              width={500} 
              height={500} 
              className={Styles.img} 
              style={{ border: "2px solid black" }} 
            />
          </div>

          {/* Right Column */}
         <div className={Styles.infoColumn}>
           
            {info.slice(Math.ceil(info.length / 2)).map((item, index) => (
             <div key={index} className={Styles.infoCard}>
                
                <strong>{item.name}</strong>
                <br></br>
                <strong>States affected:</strong> {item.states}
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
