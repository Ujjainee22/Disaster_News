/*'use client'
import axios from "axios"
import { useState } from "react";
export default function Home()
{

const [name,setName]=useState('')
const [email,setEmail]=useState('')

const handleSubmit =async (e) => // check async
{
    e.preventDefault()
    try{

      const response=  await axios.post('/Api/data_backend' , {name, email }) // if any other way 
    }
    catch (err){
        console.log(err)
    }

}

return (

<>
    <h1>Next connection with MongoDb </h1>
    <h2> create user </h2>
<form onSubmit={handleSubmit} ><div>
    <label>NAME</label>
    <input type= "text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} required></input>
</div>

<div>
    <label>email</label>
    <input type= "email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>

</div>

<button > SUBMIT</button>
</form>


</>
);
}*/

/*const getData=async()=>{

    let data =await fetch ("http://localhost:3000/Api/data_backend");
    data=await data.json();
    if (data.result) {
      return data.data; // Correct key as per your route.js
    } else {
      return [];
    }
};


export default async function Page() {
  const data1 = await getData();

  return (
    <>
      <h1>Displaying</h1>
      <div>
        {data1.map((item) => (
          <div key={item._id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.message}</p><p> -------------  </p>
          </div>
        ))}
      </div>
    </>
  );
}*/


'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Styles from "@/app/disaster/disaster.module.css";
import Mapbutton from "@/app/components/mapbutton";
import Footer from "@/app/components/footer";
import Back from "@/app/disaster/backbutton";

const Page = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('/Dbapi/cont1')
      .then(res => res.json())
      .then(data => setInfo(data));
  }, []);

  return (
    <>
      <div className={Styles.main}>
        <Back />
        <Mapbutton />
        <p className={Styles.head}>The Drought Prone Areas in India</p>

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
              src="/Stores/droughtMap.png" 
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
