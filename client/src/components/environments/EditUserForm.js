import React, { useState, useEffect } from 'react';
import "../style/User.css";
const EditUserForm = ({ users, onSaveUser }) => {
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (users && userId) {
      const user = users.find(user => user.id === userId);
      if (user) {
        setName(user.name);
        setUsername(user.username);
        setEmail(user.email);
        setRole(user.role);
        setCity(user.city);
        setAddress(user.address);
        setCountry(user.country);
      }
    }
  }, [users, userId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedUser = {
      name,
      username,
      email,
      role,
      city,
      address,
      country
    };

    onSaveUser(userId, updatedUser);
  };

  return (
    <div className='containerr'>
    <form onSubmit={handleSubmit}>
      <div className='user'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className='user'> 
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </div>
      <div className='user'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      
      <div className='user'>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
      </div>
      <div className='user'>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
      </div>
      <div className='user'>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          required
        />
      </div>
      <div className='user'>
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          required
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>
      <div className='user'>
      <button className='user' type="submit">Save</button>
      </div>
    </form>
    </div>
  );
};

export default EditUserForm;
