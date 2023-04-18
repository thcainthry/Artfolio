import React, { useState } from 'react';
import axios from "axios";
//import { useNavigate } from "react-router-dom";
//import { Link, useNavigate } from "react-router-dom";

const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

 //const navigate = useNavigate();

  const isFormValid = () => {
    return name !== '' && email !== '' && message !== '';
  }

 const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/ContactUsForm", { name, email, message });
      //nvigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={!isFormValid()}>Send</button>
      {error && <p>There was an error submitting the form. Please try again later.</p>}
    </form>
  );
};

export default ContactUsForm;
