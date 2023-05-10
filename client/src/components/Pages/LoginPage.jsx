import { useState, createContext, useContext } from "react";

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

  function handleLogin(event) {
    event.preventDefault();
    // handle login logic
    setUser("John Doe");
  }

  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>
      <form className="l" onSubmit={handleLogin}>
        <p>
          <label className="l">Username or email address</label>
          <br />
          <input className="l"
            type="text"
            name="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </p>
        <p>
          <label className="l">Password</label>
          <br />
          <input className="l" type="password" name="password" required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
          <p className="pp">or</p>
          <ForgetPasswordLink />
        </p>
      </form>
      <footer className="fot">
        <p>
          First time? <a href="/SignUp">Create an account</a>.
        </p>
        <p>
          <a href="/">Back to Homepage</a>.
        </p>
      </footer>
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
