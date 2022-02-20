import React from "react";
import validate from "./validateInfo";
import "./Form.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    school: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-body">
          <h1 className="form-title">Sign Up</h1>
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
            {errors.username && <p>{errors.username}</p>}
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
            {errors.email && <p>{errors.email}</p>}
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
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password2" classname="form-label">
              Confirm Password:
            </label>
            <input
              id="password2"
              type="password"
              name="password2"
              classname="form-input"
              placeholder="Enter your password2"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="school" classname="form-label">
              School:
            </label>
            <input
              id="school"
              type="school"
              name="school"
              classname="form-input"
              placeholder="Enter your school"
              value={values.password2}
              onChange={handleChange}
            />
          </div>

          <button className="form-input-btn" type="submit">
            Sign Up
          </button>

          <div className="form-input-login">
            Already signed up? Login <Link to="/login">here</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
