import React, { useState } from 'react';
import ContactUsForm from '../Contact/ContactUsForm.js';
import ContactUsSubmitted from '../Contact/ContactUsSubmitted.js';
import '../Contact/ContactUs.css';

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setFormSubmitted(true);
  }

  const handleReset = () => {
    setFormSubmitted(false);
  }

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      {formSubmitted ? (
        <ContactUsSubmitted handleReset={handleReset} />
      ) : (
        <ContactUsForm handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default ContactUs;
