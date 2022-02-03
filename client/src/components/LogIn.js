import { useState } from "react"
import {useNavigate} from 'react-router-dom';
import SignUp from "./SignUp";

function LogIn(onLogin){
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");;
        const navigate = useNavigate()
      
        function handleSubmit(e) {
          e.preventDefault();
          fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            }
          });
          navigate('/home')
        }
      
        return (
          <>
          <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              <input type="submit" value="Submit" />
              </form>
              <SignUp onLogin={onLogin}/>
              </>
        )}

export default LogIn;