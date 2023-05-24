import '../style/SignUpStyle.css';
import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";


function SignUp() {
  const [Name, setFirstName] = useState('');
  const [userName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [failedRegister,setError]=useState("");
  const [succesfulRegister,setSuccess]=useState("");
  const history = useHistory();
  
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }
  
  function handleCountryChange(event) {
    setCountry(event.target.value);
  }
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    setFirstNameError("");
    const pattern = /^[a-zA-Z0-9]{3,}$/;
    if (!pattern.test(event.target.value)) {
      setFirstNameError("Name must contain at least 3 alphanumeric characters");
    }
    }
    function handleLastNameChange(event) {
      setLastName(event.target.value);
      setLastNameError("");
      const pattern = /^[a-zA-Z0-9]{3,}$/;
      if (!pattern.test(event.target.value)) {
        setLastNameError("Username must contain at least 3 alphanumeric characters");
      }
      }
    
      function handleCityChange(event) {
        setCity(event.target.value);
      }
    function handlePasswordChange(event) {
      setPassword(event.target.value);
      setPasswordError("");
      const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (!pattern.test(event.target.value)) {
        setPasswordError(
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long"
        );
      }
    }
  
    function handleConfirmPasswordChange(event) {
      setConfirmPassword(event.target.value);
  
    }
  
    function handleEmailChange(event) {
      setEmail(event.target.value);
      setEmailError("");
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(event.target.value)) {
        setEmailError("Please enter a valid email address");
      }
    }
  
  
    function handleSubmit(event) {
      event.preventDefault();
  
      if (!Name || !userName || !email  || !password || !confirmPassword) {
        setError("Please fill in all required fields");
        return;
      } else  if (firstNameError || lastNameError || emailError  || passwordError) {
        setError("Please enter the correct information");
        return;
      }
       // Check if there are any validation errors
      
      // Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
  
      // Send request to server using Axios
      axios.post("/auth/signup", {
        Name,
        userName,
        email,
        password,
        address,
        city,
        country,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "Custom-Header": "value",
        },
      })
        .then((response) => {
          console.log("Registration successful");
          setSuccess("Registration successful");
          setTimeout(() => {
            history("/LoginPage");
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
          if (error.response) {
            const data = error.response.data;
            if (data.message === "Username already exists") {
              setError("Username is already taken");
            } else if (data.message === "Email has already been used") {
              setError("Email is already used");
            } else {
              setError(
                "Registration failed, please try again or contact support for assistance"
              );
            }
          } else {
            setError(
              "Registration failed, please try again or contact support for assistance"
            );
          }
        });
    }
  
return (
  <div className="register-wrap">
    <form onSubmit={handleSubmit} className="register-form">
      <label>
        <div className="label-text">Name:</div>
        <input type="text" placeholder="Enter Name" value={Name} onChange={handleFirstNameChange} />
         <div className="error-message">{firstNameError}</div>
      </label>

      <label>
        <div className="label-text">Username:</div>
        <input type="text" placeholder="Enter Username" value={userName} onChange={handleLastNameChange} />
         <div className="error-message">{lastNameError}</div>
      </label>
    
      <label>
  <div className="label-text">Address:</div>
  <input type="text" placeholder="Enter Address" value={address} onChange={handleAddressChange} />
</label>

      <label>
  <div className="label-text">City:</div>
  <input type="text" placeholder="Enter City" value={city} onChange={handleCityChange} />
</label>

<label>
  <div className="label-text">Country:</div>
  <input type="text" placeholder="Enter Country" value={country} onChange={handleCountryChange} />
</label>

      <label>
        <div className="label-text">Email:</div>
        <input type="text"  placeholder="Enter Email" value={email} onChange={handleEmailChange} />
      </label>
      <div className="error-message">{emailError}</div>
        
        
      <label>
        <div className="label-text">Password:</div>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePasswordChange}
        />
           <div className="error-message">{passwordError}</div>
      </label>
   
      <label>
        <div className="label-text">Confirm Password:</div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </label>
      <div className="error-message">{failedRegister}</div>
      <div className="error-message">{succesfulRegister}</div>
      <button type="submit">Register</button>
      <a href="/LoginPage" class="login">Already have an account? Log in!</a>
    </form>
  </div>
);
}
export default SignUp;
