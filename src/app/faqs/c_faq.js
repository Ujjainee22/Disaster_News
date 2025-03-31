// components/FAQ.js

import React from "react";

const FAQ = ({ faqs }) => {
  return (
    <div className="">
      {faqs.map((faq, index) => (
        <details key={index} className="">
          <summary className="">{faq.question}</summary>
          <p className="">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQ;
