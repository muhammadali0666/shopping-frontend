import React from "react";
import "./login.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    fetch("http://localhost:4001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          if(data.checkup !== "you are not admin"){
            localStorage.setItem("getATN", data.checkup)
          }
          alert(data.msg);
        }
        if (data.token) {
          window.location.href = "/";
        }
      });
  };

  return (
    <div className="container">
      <h1 className="form-title">Sign in</h1>
      <form className="register_form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="register_label">
          email
          <input
            type="email"
            id="email"
            className="input-field"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="register_label">
          password
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <NavLink className="auth_navigate" to="/register">
          Register
        </NavLink>
        <button className="sign-up-button" type="submit">
          login
        </button>
      </form>
    </div>
  );
};
