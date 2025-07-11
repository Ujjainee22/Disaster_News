"use client";

import { useState } from "react";
import styles from "@/app/feedback/contact.module.css";
import axios from "axios"

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{

      const response=  await axios.post('/Dbapi/data_backend' , formData) // if any other way 
      console.log("Submitted:", formData);
      alert("Form submitted successfully!");

    }
    catch (err){
        console.log(err)
    }

  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input
            type="text"
            name="name"
            id="username"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="on"
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="on"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="on"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            autoComplete="on"
          />
        </label>
      </div>

      <div>
        <button type="submit" className={styles.button}>Send</button>
      </div>
    </form>
  );
}
