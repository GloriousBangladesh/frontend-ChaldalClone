import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      email:
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      password:
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  );
}

export default Login;
