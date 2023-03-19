import axios from "axios";
import { useEffect, useState } from "react";

const useLogin = () => {
  let [passwordShown, setPasswordShown] = useState(false);

  let [loggedInUser, setLoggedInUser] = useState({});

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const getLogin = async (data) => {
    // console.log(data);
    await axios.post("http://localhost:8888", data).then(function (response) {
      console.log(response.data);
      setLoggedInUser(response.data);
      sessionStorage.setItem("moderator", JSON.stringify(response.data.user));
    });
  };

  return {
    getLogin,
    togglePassword,
    passwordShown,
    setPasswordShown,
    loggedInUser,
  };
};
export default useLogin;
