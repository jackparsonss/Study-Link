import React from "react";
import "./Form.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { setEmail, setUser } from "../../slices/authSlice";
import { auth } from "../../firebase";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const loggedIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        return navigate("/");
      }
    });
    return loggedIn;
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setEmail(values.email));
    try {
      const userCredentials = await signInWithEmailAndPassword(
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

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-body">
          <h1 className="form-title">Login</h1>
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
          </div>

          <button className="form-input-btn" type="submit">
            Login
          </button>
          <div className="form-input-login">
            Not to signed up? Sign up <Link to="/login">here</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
