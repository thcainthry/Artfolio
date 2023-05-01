import React from 'react';

const ContactUsSubmitted = ({ handleReset }) => {
  return (
    <div className="form-submitted-message">
      <p>Thank you for your message!</p>
      <button onClick={handleReset}>Send another message</button>
    </div>
  );
};

export default ContactUsSubmitted;
