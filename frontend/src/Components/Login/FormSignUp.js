import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css'

const FormSignUp = (submitForm) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Please fill out the information below</h1>
                <div className="form-inputs">
                    <label htmlFor="username" classname="form-label">
                        UserName
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
                        Email
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
                        Password
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
                        Confirm Password
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

                <button className="form-input-btn" type="submit">
                    SignUp
                </button>

                <span className="form-input-login">
                    Already signed up? Login <a href="#">here</a>
                </span>









            </form>
        </div>
    );
};

export default FormSignUp