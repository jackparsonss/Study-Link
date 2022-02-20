import React from "react";
import "./Form.css";
import { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-body">
          <h1 className="form-title">Login</h1>
          <div className="form-inputs">
            <label htmlFor="username" classname="form-label">
              Username:
            </label>
            <input
              id="username"
              type="text"
              name="username"
              classname="form-input"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="email" classname="form-label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              classname="form-input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-inputs">
            <label htmlFor="password" classname="form-label">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              classname="form-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <button className="form-input-btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
