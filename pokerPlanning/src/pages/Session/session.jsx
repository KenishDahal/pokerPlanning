import React, { useEffect, useState } from "react";
import "./session.scss";
import Navbar from "../../components/nav/navbar";
import Sidebar from "../../components/sidebar/sessionSidebar/sidebar";
import useSession from "../../hooks/useSession";
import Input from "../../components/ui/Input";
import { useNavigate } from "react-router-dom";

const Session = () => {
  let [credentials, setCredentials] = useState({
    name: "",
  });

  let { usersSession, addSession, sessionCreated } = useSession();

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionCreated.success) {
      navigate(`/session/${sessionCreated.sessionId}`);
    }
  }, [sessionCreated.success, navigate]);
  // console.log(loggedInUser.success);

  // console.log(parsedData);

  const handleSubmit = (e) => {
    e.preventDefault();

    addSession(credentials.name);

    setCredentials({
      name: "",
    });
  };
  return (
    <>
      <Navbar />
      <div className="session--page">
        <Sidebar />
        <form action="" method="post" onSubmit={handleSubmit}>
          <h2>CREATE SESSION</h2>
          <label htmlFor="name">Session name:/</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={credentials.name}
            onChange={handleInputChange}
            placeholder="ENTER NAME"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Session;
