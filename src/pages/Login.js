import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your Password");
      return;
    }

    alert("Form submitted successfully");

    // This will clear inputs (refresh fields)
    setEmail("");
    setPassword("");

    e.target.reset();
  };

  return (
    <div className="login">
      <h2>Login </h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit" className="log-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
