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


  return (
    <>
    <div> {/* Main div */}
      <div > {/*1st div i.e whole cont1 div starts */}
          {info.map((item) => (

          <div key={item._id}> {/* each news of cont1 er div starts */}
            <strong>{item.name}</strong>
            <p>{item.sub}</p>
            <img src={item.image.data} alt={item.name} 
        style={{ maxWidth: "200px", height: "auto" }} />

            <p>{item.info}</p>
              <br></br>
                {/* each news of cont1 div ends*/}
          </div>

        ))} {/* 1st map func er shesh */}
      </div> {/*1st div i.e whole cont1 div ends*/}

      <br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       <div> {/* 2nd div i.e whole cont2 div starts*/}
        {info1.map((item) => (

          <div key={item._id}> {/* each news of cont2 er div starts*/}
            <strong>{item.name}</strong>
            <p>{item.sub}</p>
            <img src={item.image.data} alt={item.name} 
        style={{ maxWidth: "200px", height: "auto" }} />

            <p>{item.info}</p>
              <br></br>
                {/* each news of cont2 div ends*/}
          </div>

        ))} {/* 1st map er shesh */}
     

        </div> {/* 2nd div i.e whole cont2 div ends*/}
    
    </div> {/* Main div ends h*/}
    </>
  );
};

export default Page;
