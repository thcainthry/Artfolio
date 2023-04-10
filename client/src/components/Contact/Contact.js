import React from 'react';

function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Please use the form below to contact us:</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;