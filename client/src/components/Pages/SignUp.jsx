import '../style/SignUpStyle.css';
import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom"

function SignUp() {
  const [emri, setName] = useState('');
  const [mbiemri, setSurname] = useState('');
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [ditelindja, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [NameError, setNameError] = useState("");
  const [SurnameError, setSurnameError] = useState("");
  const [userNameError, setuserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [failedRegister,setError] = useState("");
  const [succesfulRegister,setSuccess] = useState("");
  const history = useHistory();
  const [birthdayError, setBirthdayError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");


  function handleNameChange(event) {
    setName(event.target.value);
    setNameError("");
    const pattern = /^[a-zA-Z0-9]{3,}$/;
    if (!pattern.test(event.target.value)) {
      setNameError("Name must contain at least 3 alphanumeric characters");
    }
  }

  function handleSurnameChange(event) {
    setSurname(event.target.value);
    setSurnameError("");
    const pattern = /^[a-zA-Z0-9]{3,}$/;
    if (!pattern.test(event.target.value)) {
      setSurnameError("Surname must contain at least 3 alphanumeric characters");
    }
  }
 
  function handleuserNameChange(event) {
    setuserName(event.target.value);
    setuserNameError("");
    const pattern = /^[a-zA-Z0-9]{3,}$/;
    if (!pattern.test(event.target.value)) {
      setuserNameError("Username must contain at least 3 alphanumeric characters");
    }
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

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setEmailError("");
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(event.target.value)) {
      setEmailError("Please enter a valid email address");
    }
  }


  function handleBirthdayChange(event) {
    setBirthday(event.target.value);
    setBirthdayError("");
    // Assuming you want to validate the date format
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!pattern.test(event.target.value)) {
      setBirthdayError("Please format YYYY-MM-DD");
    }
  }
  
  function handleAddressChange(event) {
    setAddress(event.target.value);
    setAddressError("");
    const pattern = /^[a-zA-Z0-9\s]{3,}$/;
    if (!pattern.test(event.target.value)) {
      setAddressError("Address must contain at least 3 alphanumeric characters");
    }
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    setCityError("");
    const pattern = /^[a-zA-Z0-9]{3,}$/;
    if (!pattern.test(event.target.value)) {
      setCityError("City must contain at least 3 alphanumeric characters");
    }
  }
  function handleCountryChange(event) {
    setCountry(event.target.value);
    setCountryError("");
    const pattern = /^[a-zA-Z0-9]{3,}$/;
    if (!pattern.test(event.target.value)) {
      setCountryError("Country must contain at least 3 alphanumeric characters");
    }
  }
  


  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError("");
    if (event.target.value !== password) {
      setConfirmPasswordError("Passwords do not match");
    }
  }
  
  

  function handleSubmit(event) {
    event.preventDefault();

    if (!emri || !mbiemri || !username || !email || !ditelindja || !address || !city || !country || !password || !confirmPassword) {
      setError("Please fill in all required fields");
      return;
    } else if (NameError || SurnameError || userNameError || emailError || birthdayError || addressError || cityError || countryError || passwordError || confirmPasswordError) {
      setError("Please enter the correct information");
      return;
    }

   

    // Send request to server using Axios
    axios.post("http://localhost:5000/Users", {
      emri,
      mbiemri,
      username,
      password,
      email,
      ditelindja,
      address,
      city,
      country
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
        history.push("/LoginPage");
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
    <div className='register-reg'>
      <div className="register-wrap">
        <h1>Register now</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <label>
            <div className="label-text">Emri:</div>
            <input type="text" placeholder="Enter Name" value={emri} onChange={handleNameChange} />
            <div className="error-message">{NameError}</div>
          </label>
          <label>
            <div className="label-text">Mbiemri:</div>
            <input type="text" placeholder="Enter Surname" value={mbiemri} onChange={handleSurnameChange} />
            <div className="error-message">{SurnameError}</div>
          </label>
          <label>
            <div className="label-text">Username:</div>
            <input type="text" placeholder="Enter Username" value={username} onChange={handleuserNameChange} />
            <div className="error-message">{userNameError}</div>
          </label>
          <label>
            <div className="label-text">Email:</div>
            <input type="text" placeholder="Enter Email" value={email} onChange={handleEmailChange} />
            <div className="error-message">{emailError}</div>
          </label>
          <label>
            <div className="label-text">Ditelindja:</div>
            <input type="text" placeholder="Enter Birthday" value={ditelindja} onChange={handleBirthdayChange} />
            <div className="error-message">{birthdayError}</div>
          </label>
          <label>
            <div className="label-text">Address:</div>
            <input type="text" placeholder="Enter Address" value={address} onChange={handleAddressChange} />
            <div className="error-message">{addressError}</div>
          </label>
          <label>
            <div className="label-text">City:</div>
            <input type="text" placeholder="Enter City" value={city} onChange={handleCityChange} />
            <div className="error-message">{cityError}</div>
          </label>
          <label>
            <div className="label-text">Country:</div>
            <input type="text" placeholder="Enter Country" value={country} onChange={handleCountryChange} />
            <div className="error-message">{countryError}</div>
          </label>
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
            <div className="error-message">{confirmPasswordError}</div>
          </label>
          <div className="error-message">{failedRegister}</div>
          <div className="error-message">{succesfulRegister}</div>
          <button type="submit">Register</button>
          <a href="/LoginPage" className="login">Already have an account? Log in!</a>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
