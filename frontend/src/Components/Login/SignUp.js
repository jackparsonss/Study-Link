import React from "react";
import validate from "./validateInfo";
import "./Form.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setEmail, setUser, setSchool } from "../../slices/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));

    dispatch(setEmail(values.email));
    dispatch(setSchool(values.school));
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredentials.user;
      dispatch(setUser(user.uid));
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    const loggedIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        return navigate("/");
      }
    });
    return loggedIn;
  }, []);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-body">
          <h1 className="form-title">Sign Up</h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              Confirm Password:
            </label>
            <input
              id="password2"
              type="password"
              name="password2"
              className="form-input"
              placeholder="Enter your password2"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="school" className="form-label">
              School:
            </label>
            <input
              id="school"
              type="school"
              name="school"
              className="form-input"
              placeholder="Enter your school"
              value={values.school}
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
