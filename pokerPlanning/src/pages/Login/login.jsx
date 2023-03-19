import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import Input from "../../components/ui/Input";
import useLogin from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
// import "./login.scss";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // let [loggedInUser, setLoggedInUser] = useState(false);

  let {
    getLogin,
    togglePassword,
    passwordShown,
    setPasswordShown,
    loggedInUser,
  } = useLogin();

  const navigate = useNavigate();

  let sessionData = sessionStorage.getItem("sessionId");

  useEffect(() => {
    if (loggedInUser.success && sessionData) {
      navigate(`/session/${sessionData}`);
      // setLoggedInUser(true);
    } else if (loggedInUser.success) {
      navigate("/session");
    }
  }, [loggedInUser.success, navigate]);
  console.log(loggedInUser.success);

  const handleSubmit = (event) => {
    event.preventDefault();

    getLogin({ action: "logIn", ...credentials });

    // let find = usersLogin.some(
    //   (user)=>
    //   user.email === credentials.email &&
    //   user.password === credentials.password
    // )
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="login--page--content">
      <div className="login--page--content--inner">
        <form
          method="POST"
          className="login--page--content--inner--form"
          onSubmit={handleSubmit}
        >
          <div className="h5 login--page--content--inner--form__firstDesc login--page--content--inner--form__desc">
            LOGIN TO ACCOUNT
          </div>
          <div className="eyebrow login--page--content--inner--form__secondDesc login--page--content--inner--form__desc">
            to get started now !
          </div>
          <div className="login--page--content--inner--form--field">
            <Input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="ENTER EMAIL ADDRESS"
            />
          </div>
          <div className="login--page--content--inner--form--field">
            <Input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="ENTER PASSWORD"
            />
            <div className="login--page--content--inner--form--field--smalltext">
              <a className="caption" href="/reset_password">
                Forgot password?
              </a>
            </div>
          </div>
          <Button
            text="Login"
            className="login--page--content--inner--form--button"
          />
          <div className="login--page--content--inner--form--option">
            <div className="login--page--content--inner--form--option__left"></div>
            <div className="login--page--content--inner--form--option__text">
              Or login with
            </div>
            <div className="login--page--content--inner--form--option__right"></div>
          </div>
          <div className="login--page--content--inner--form--account">
            <div className="login--page--content--inner--form--account__left">
              gmail
            </div>
            <div className="login--page--content--inner--form--account__right">
              facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
