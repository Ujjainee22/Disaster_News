import React from 'react';
import styles from "@/app/feedback/contact.module.css";
import ContactForm from './ContactForm';

const Page = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.contact_section}>
          <h2><span>FEEDBACK FORM</span></h2>
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default Page;
