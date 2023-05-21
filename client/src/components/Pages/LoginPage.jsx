import { useState, createContext, useContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import '../style/Login.css';
const token = localStorage.getItem("token");
const UserContext = createContext();

export default function SignInPage() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <LoginForm />
    </UserContext.Provider>
  );
}

function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  function handleUsernameChange(event) {
    setUser(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function validateForm() {
    if (user.trim() === "" || password.trim() === "") {
      setErrorMessage("Please enter your username and password");
      return false;
    }
    return true;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log(`Submitting username ${user} and password ${password}`);
    try {
      const response = await axios.post(
        "/auth/login",
        {
          user,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Custom-Header": "value",
          },
        }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token); // save token to local storage
      const decodedToken = jwt_decode(response.data.token);
      const userRole = decodedToken.role;
      
      if (userRole === "admin") {
        history("/home");
      } else if (userRole === "member") {
        history("/home");
      } else {
        console.error("Unknown user role:", userRole);
      }
      window.location.reload();
    } catch (error) {
      console.error(error);
      setErrorMessage("Incorrect username or password");
    }
  }


  return (
    <div className="login-wrap">
      <form onSubmit={handleSubmit} className="login-form" method="POST">
        <label>
          <div className="label-text">Username:</div>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={user}
            onChange={handleUsernameChange}
          />
        </label>
        <label>
          <div className="label-text">Password:</div>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div class="forgot-password__wrapper">
          <ForgetPasswordLink />
        </div>
        </label>
        
        <button type="submit">Log in</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
        
        <a href="/SignUp" class="register">No account? Sign up here</a>
      </form>

    
    </div>
  );
}


function ForgetPasswordLink() {
  return (
    <a href="/ForgetPasswordPage">
      <label className="right-label">Forget password?</label>
    </a>
  );
}
