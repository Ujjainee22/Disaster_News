'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Styles from "@/app/content/herosection.module.css";
import Mapbutton from "@/app/components/mapbutton";
import Footer from "@/app/components/footer";
import Back from "@/app/disaster/backbutton";

const Page = () => {
  const [info, setInfo] = useState([]);
  const [info1, setInfo1] = useState([]);
  

  useEffect(() => {
    fetch('/Dbapi/cont1')
      .then(res => res.json())
      .then(data => setInfo(data));
  }, []);

useEffect(() => {
    fetch('/Dbapi/cont2')
      .then(res => res.json())
      .then(data => setInfo1(data));
  }, []);

  const news1=info[0];
  const news2=info[1];
  const news3=info[2];

  const news21=info1[0];
  const news22=info1[1];
  return (
    <div className={Styles.newspaper}>
      
      {/* Column 1 - Indian Times */}
      < div className={Styles.column}>
      
        <div className={Styles.header}>
          <hr/>
          <h1>INDIAN TIMES</h1>
          <hr/>
          <p>Catastrophic Chronicles: The World's Most Devastating Disasters</p>
        </div>


        <div className={Styles.pouch1}>
        {news1 && (
          <div className={Styles.article}>
            <img src={news1.image.data} alt={news1.name} />
            <strong>{news1.name}</strong>
            <p className={Styles.subhead}>{news1.sub}</p>
    
            <p className={Styles.info}>{news1.info}</p>

      </div>
        )}

      {news2 && (
          <div className={Styles.article}>
            <strong>{news2.name}</strong>
            <p className={Styles.subhead}>{news2.sub}</p>
            <img src={news2.image.data} alt={news2.name}/>
            <p className={Styles.info}>{news2.info}</p>

      </div>
        )}
      </div>


      {news3 && (
          <div className={Styles.pouch2}>
            <img src={news3.image.data} alt={news3.name} className={Styles.img3}/>
            <div className={Styles.textContent}>
            <strong>{news3.name}</strong>
            <p className={Styles.subhead}>{news3.sub}</p>
            <p className={Styles.info}>{news3.info}</p>
           </div>
      </div>
        )}


      </div>



      {/* Column 2 - City News */}
      <div className={Styles.column}>
        <div className={Styles.header}>
          <hr/>
          <h1>CITY NEWS</h1>
          <hr/>
          <p>Disaster News&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ⏺ www.reallygreatsite.com ⏺   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Arowwai Industries </p>
        </div>
        {news21 && (
          <div className={Styles.pouch2}>
            <div className={Styles.textContent}>
            <strong>{news21.name}</strong>
            <p className={Styles.subhead}>{news21.sub}</p>
            <p className={Styles.info}>{news21.info}</p>
           </div>
          <img src={news21.image.data} alt={news21.name} className={Styles.img4}/>

      </div>
        )}


<br/>
<br/>
            {news22 && (
          <div className={Styles.pouch2}>
          <img src={news22.image.data} alt={news22.name} className={Styles.img4}/>
            <div className={Styles.textContent}>
            <strong>{news22.name}</strong>
            <p className={Styles.subhead}>{news22.sub}</p>
            <p className={Styles.info}>{news22.info}</p>
           </div>

      </div>
        )}
        
      </div>
    </div>
  );
};

export default Page;