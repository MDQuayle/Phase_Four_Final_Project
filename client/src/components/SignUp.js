import { useState } from "react";
import {useNavigate} from 'react-router-dom';
function SignUp({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate()

    
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
      }});
      navigate('/home')
  }
  
    return (
      <>
      <p> Not already a user? Need to signup?</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="signUpUsername"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="signUpPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password" />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password" />
        <input type="submit" value="Submit" />
      </form>
      </>
    );
  }
  
  export default SignUp;