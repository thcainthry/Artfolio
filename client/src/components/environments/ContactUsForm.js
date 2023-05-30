import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactUsForm = () => {
  const [error, setError] = useState(false);

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:5000/ContactUsForm", values);
      resetForm();
      setError(false);
      alert('Form submitted successfully!');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      <Form>
        <div className='formc'>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" required />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className='formc'>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" required />
          <ErrorMessage name="email" component="div" />
        </div>
        <div className='formc'>
          <label htmlFor="message">Message:</label>
          <Field as="textarea" id="message" name="message" required />
          <ErrorMessage name="message" component="div" />
        </div>
        <button type="submit">Send</button>
        {error && (
          <p>There was an error submitting the form. Please try again later.</p>
        )}
      </Form>
    </Formik>
  );
};

export default ContactUsForm;
