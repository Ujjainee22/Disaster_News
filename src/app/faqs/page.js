"use client";


import FAQ from "@/app/faqs/c_faq";
import React from "react";
import Feedback from '../feedback/page';
import Footer from "../components/footer";
import Header from "@/app/components/header";
import styles from "@/app/faqs/faq.module.css";
import { useState } from 'react';


const faqs = [
  {
    question: "What was the most dangerous cyclone that hit india till date ?",
    answer: "Cyclone Bhola in 1970 is known to be the deadliest cyclone in history. It hit East Pakistan -now Bangladesh, and parts of India, killing a horrifying amount of 300,000 to 500,000 people as its devastating storms and flooding carried away through the low-lying regions.",
  },
  {
    question: "How can I stay safe during a hurricane?",
    answer: "Stay indoors, away from windows, and follow emergency alerts.",
  },
  {
    question: "What is the safest place during a tornado?",
    answer: "Go to a basement or an interior room on the lowest floor, away from windows.",
  },
  {
    question: "Which regions of India are most vulnerable to disasters?",
    answer:
      "The Himalayan region is prone to earthquakes and landslides, while the alluvial plains are susceptible to floods. The coastal regions face the threat of cyclones, and the desert regions experience droughts.",
  },
  {
    question: "How can landslides be prevented in hilly areas?",
    answer:
      "Landslides in hilly areas can be prevented by planting deep-rooted vegetation, constructing retaining walls, and using proper drainage systems to reduce water buildup. Additionally, restricting construction on steep slopes and conducting regular soil stability checks can help minimize risks.",  },
  {
    question: "Which regions of India are most affected by droughts?",
    answer:
      "",  },
  {
    question: "Which is the most dangerous forest fire in india till date ",
    answer:
      "The Himalayan region is prone to earthquakes and landslides, while the alluvial plains are susceptible to floods. The coastal regions face the threat of cyclones, and the desert regions experience droughts.",
  },
  {
    question: "Which helpline number do you call in case of a disaster?",
    answer:
      "For general emergencies, dial 112 (a pan-India emergency number), or for specific disasters, call 1070 (Relief Commissioner for Natural Calamities) or 011-24363260 (NDRF Headquarters).",
  },

  {
    question: "How do i get to know which disaster is approaching within few days?",
    answer:
      "visit the emergency alert section of our site",
  },
  {
    question: "How do i get the news of a specific disaster in a state ?",
    answer:
      "Please check the navigation part of the 'HELP' section of our site",
  },
  
  {
    question: "Deadliest landslide till date in India?",
    answer:
      "Kedarnath, Uttarakhand (2013) - This landslide was triggered by unprecedented rain and floods in the Himalayan state. Over 5,700 people died and over 4,200 villages were washed away in one of the worst natural disasters the country has ever seen.",
  },

];

const FAQsPage = () => {

 const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Header/>
    <div className={styles.container}>
      <h1 className={styles.heading}>FAQs</h1>
      {faqs.map((item, index) => (
        <div key={index} className={styles.faqCard} onClick={() => toggle(index)}>
          <div className={styles.question}>{item.question}</div>
          {openIndex === index && <div className={styles.answer}>{item.answer}</div>}
        </div>
      ))}
      <Feedback/>
      <Footer/>
    </div>
    </>
);
}

export default FAQsPage;
