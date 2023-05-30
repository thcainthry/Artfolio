import React, { useState } from 'react';
import axios from 'axios';
import "../style/User.css";

const CreateUserForm = ({ addUserForm }) => {
  const [emri, setName] = useState('');
  const [mbiemri, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [ditelindja, setBirthday] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { emri, mbiemri, username, password, email, ditelindja };
      await axios.post("http://localhost:5000/CreateUserForm", newUser);
      setName('');
      setLastName('');
      setUsername('');
      setPassword('');
      setEmail('');
      setBirthday('');
      alert('Form submitted successfully!');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='containerr'>
      <form onSubmit={handleSubmit}>
        <div className='user'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={emri}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='user'>
          <label htmlFor="lastname">Lastname:</label>
          <input
            type="text"
            id="lastname"
            value={mbiemri}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className='user'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='user'>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='user'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='user'>
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="text"
            id="birthday"
            value={ditelindja}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </div>
        <div className='user'>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserForm;

