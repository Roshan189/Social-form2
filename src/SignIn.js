import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="signup">
      <div className="main-container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign In</h2>
            <form className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Your Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Your password"
                />
              </div>

              <div className="form-group form-button">
                <button type="submit" className="form-submit">
                  Log In
                </button>
              </div>
            </form>
            <div>
              <NavLink className="signin-link" to="/signup">
                Create an Account?
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
