import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="signup">
      <div className="main-container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign Up</h2>
            <form className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Your Name"
                />
              </div>
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
                <label htmlFor="phone"></label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Your Number"
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
              <div className="form-group">
                <label htmlFor="cpassword"></label>
                <input
                  type="cpassword"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  placeholder="Confirm Your Password"
                />
              </div>

              <div className="form-group form-button">
                <button type="submit" className="form-submit" value="register">
                  Register
                </button>
                <div>
                  <NavLink className="signup-link" to="/signin">
                    Aready had Account?
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
