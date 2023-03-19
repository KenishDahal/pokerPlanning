import axios from "axios";
import { useEffect, useState } from "react";

const useSignup = () => {
  let [usersRegistration, setUsersRegistration] = useState([]);

  let [passwordShown, setPasswordShown] = useState(false);

  let togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const addRegistration = async (data) => {
    // console.log(addticketList.Customername)
    // await axios.post("http://localhost:8888/", data).then(function (response) {
    //   console.log(response.data);
    // });
    // const loginUser = async ({ email, password, submit_register }) => {
      // console.log(fullName, email, password);
      console.log(data);
      try {
        await axios
          .post("http://localhost:8888", data)
          .then((response) => {
            console.log(JSON.parse(response.config.data));
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    // await fetch(
    //   "http://localhost:8888/",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       fullName: credentials.fullName,
    //       email: credentials.email,
    //       password: credentials.password,
    //       confirmPassword: credentials.confirmPassword,
    //     }),
    //   }
    // )
    // .then((res) => res.json())
    // .then((data) => {
    //   //  console.log(usersDetail)
    //   //  console.log(1)
    //   setUsersRegistration([data]);
    // });
  };
  return {
    usersRegistration,
    addRegistration,
    togglePassword,
    passwordShown,
    setPasswordShown,
  };
};

export default useSignup;
