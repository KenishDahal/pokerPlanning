import { useState } from "react";
import React from "react";
import useSignup from "./useSignup";
import Input from "../../components/ui/Input";
import { Button } from "../../components/ui/button";

function Signup() {
  let [credentials, setCredentials] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  let {
    usersRegistration,
    addRegistration,
    togglePassword,
    passwordShown,
    setPasswordShown,
  } = useSignup();

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRegistration({ action: "signUp", ...credentials });
    // console.log(credentials);
    setCredentials({
      fullName: "",
      email: "",
      password: "",
      action: "signUp",
    });
  };

  return (
    <div className="signup--page--content">
      <div className="signup--page--content--inner">
        <form
          method="post"
          className="signup--page--content--inner--form"
          onSubmit={handleSubmit}
        >
          <div className="h5 signup--page--content--inner--form__firstDesc signup--page--content--inner--form__desc">
            SIGNUP TO ACCOUNT
          </div>
          <div className="eyebrow signup--page--content--inner--form__secondDesc signup--page--content--inner--form__desc">
            to get started now !
          </div>
          <div className="signup--page--content--inner--form--field">
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={credentials.fullName}
              onChange={handleInputChange}
              placeholder="ENTER FULLNAME"
            />
          </div>
          <div className="signup--page--content--inner--form--field">
            <Input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="ENTER EMAIL ADDRESS"
            />
          </div>
          <div className="signup--page--content--inner--form--field">
            <Input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="ENTER PASSWORD"
            />
            <div className="signup--page--content--inner--form--field--smalltext">
              <a className="caption" href="/reset_password">
                Forgot password?
              </a>
            </div>
          </div>
          <Button
            text="Signup"
            className="signup--page--content--inner--form--button"
          />
          <div className="signup--page--content--inner--form--option">
            <div className="signup--page--content--inner--form--option__left"></div>
            <div className="signup--page--content--inner--form--option__text">
              Or login with
            </div>
            <div className="signup--page--content--inner--form--option__right"></div>
          </div>
          <div className="signup--page--content--inner--form--account">
            <div className="signup--page--content--inner--form--account__left">
              gmail
            </div>
            <div className="signup--page--content--inner--form--account__right">
              facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
