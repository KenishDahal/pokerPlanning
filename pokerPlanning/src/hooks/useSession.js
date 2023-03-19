import axios from "axios";
import { useEffect, useState } from "react";
import { v5 } from "uuid";

const useSession = () => {
  let [usersSession, setUsersSession] = useState([]);

  let [sessionCreated, setSessionCreated] = useState({});

  const addSession = async (name) => {
    let data = sessionStorage.getItem("moderator");
    let parsedData = JSON.parse(data);

    try {
      await axios
        .post("http://localhost:8888", {
          // session_id: v5(),
          name: name,
          moderator_id: parsedData?.id,
          action: "session",
        })
        .then((response) => {
          setSessionCreated(response.data);
          sessionStorage.setItem(
            "session",
            JSON.stringify(response.data.sessionId)
          );
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    usersSession,
    addSession,
    sessionCreated,
  };
};
export default useSession;
