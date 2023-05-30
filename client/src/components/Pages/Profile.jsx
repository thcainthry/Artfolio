import React from 'react';
import { AiOutlineUser, AiOutlineHome, AiOutlineGlobal, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import '../style/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile Form</h2>
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="firstName">
            <AiOutlineUser className="icon" />
            Emri:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">
            <AiOutlineUser className="icon" />
            Mbiemri:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="username">
            <AiOutlineUser className="icon" />
            Username:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="city">
            <AiOutlineHome className="icon" />
            City:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="country">
            <AiOutlineGlobal className="icon" />
            Country:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <AiOutlineMail className="icon" />
            Email:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <AiOutlineLock className="icon" />
            Password:
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
